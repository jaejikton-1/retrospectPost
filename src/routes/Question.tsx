import styled from "styled-components";
import back from "../assets/Background.svg";
import letter from "../assets/Letter.svg";
import Button from "src/components/Button";
import AnswerSelect from "src/components/AnswerSelect";
import AnswerRank from "src/components/AnswerRank";
import AnswerSentence from "src/components/AnswerSentence";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import AnswerScore from "src/components/AnswerScore";
import { dbService } from "src/fbase";

export type IProps = {
  questionIdx: number;
  question: string;
  answer_type: string;
};

const Question = ({ userObj }: any) => {
  const { id }: any = useParams();
  const [curQuiz, setQuiz] = useState<IProps>();
  const [questionList, getQuiz]: any = useState();
  const [answer, setAnswer]: any = useState([]);
  const [idx, setIdx] = useState(1);
  const history = useNavigate();

  useEffect(() => {
    dbService.collection("questionList").onSnapshot((snapshot) => {
      const questionList1: any = snapshot.docs.map((document) => ({
        question: document.data().question,
        answer_type: document.data().answer_type,
        questionIdx: document.data().questionIdx,
      }));
      getQuiz(questionList1);
    });

    const num = parseInt(id);
    if (questionList) {
      setQuiz(questionList[num - 1]); //렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
      setIdx(num + 1);
    }

    if (num === questionList?.length) {
      console.log("문제 끝남, 결과 페이지로");
      history("/result");
      return;
    }
  }, id);

  const setNext = () => {
    setIdx(idx + 1);
    history("/question/" + idx);
    if (answer || answer.length > 0) {
      sampleDB();
    }
  };

  const sampleDB = async () => {
    console.log({
      questionIdx: curQuiz?.questionIdx,
      answer: JSON.stringify(answer),
      userIdx: userObj.uid,
    });
    await dbService.collection("answer").add({
      questionIdx: curQuiz?.questionIdx,
      answer: JSON.stringify(answer),
      userIdx: userObj.uid,
    });
  };
  const setAnswerData = (data: any) => {
    console.log(data);
    setAnswer(data);
  };

  return (
    <>
      <BackgroundImg>
        <div>
          <LetterImg src={letter}></LetterImg>
          <QuestionTitle>{curQuiz?.question}</QuestionTitle>
          {curQuiz?.answer_type === "rank" ? (
            <AnswerRank setAnswerData={setAnswerData}></AnswerRank>
          ) : curQuiz?.answer_type === "sentence" ? (
            <AnswerSentence setAnswerData={setAnswerData}></AnswerSentence>
          ) : curQuiz?.answer_type === "word" ? (
            <AnswerSelect></AnswerSelect>
          ) : (
            <AnswerScore></AnswerScore>
          )}
        </div>
        {/* <Link to={`/question/${idx}`}> */}
        <Button label={"다음"} setNext={setNext}></Button>
        {/* </Link> */}
      </BackgroundImg>
    </>
  );
};

export default Question;

const LetterImg = styled.img`
  width: 60px;
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${back});
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 50px;
  text-align: center;
`;

const QuestionTitle = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 8px;
`;
