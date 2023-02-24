import styled from "styled-components";
import back from "../assets/Background.svg";
import letter from "../assets/Letter.svg";
import Button from "src/components/Button";
import AnswerSelect from "src/components/AnswerSelect";
import AnswerRank from "src/components/AnswerRank";
import AnswerSentence from "src/components/AnswerSentence";
import { useState, useEffect } from "react";
import { questionList } from "src/components/test";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AnswerScore from "src/components/AnswerScore";
import { dbService } from "src/fbase";

export type IProps = {
  question: string;
  answer_type: string;
};

const Question = () => {
  const { id }: any = useParams();
  const [curQuiz, setQuiz] = useState<IProps>();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    getQuizByDB()
    const num = parseInt(id);
    if (questionList) {
      setQuiz(questionList[num - 1]); //렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
      setIdx(num + 1);
    }
  }, []);

  const setNext = (idx: number) => {
    setIdx(idx + 1);
  };



  const getQuizByDB = async () => {
    //const tableId = `${id}_${windowCount}`;
    dbService.collection("questionList").onSnapshot((snapshot) => {
      const questionList1 = snapshot.docs.map((document) => ({
        question: document.data().question,
        answer_type: document.data().answer_type,
      }))
      console.log(questionList1);
      /*
        0: {question: '이번 달 가장 맘에 드는 소비템 TOP 3', answer_type: 'rank'}
        1: {question: '내 최애 맛집들을 소개해주세요', answer_type: 'word'}
        2: {question: '내 삶의 이유는 무엇인가요?', answer_type: 'sentence'}
        3: {question: '수지님의 2월은 어땠나요?', answer_type: 'score'}
      */
      //setQuiz(questionList1);

    })
  };

  return (
    <>
      <BackgroundImg>
        <div>
          <LetterImg src={letter}></LetterImg>
          <QuestionTitle>{curQuiz?.question}</QuestionTitle>
          {curQuiz?.answer_type === "rank" ? (
            <AnswerRank></AnswerRank>
          ) : curQuiz?.answer_type === "sentence" ? (
            <AnswerSentence></AnswerSentence>
          ) : curQuiz?.answer_type === "word" ? (
            <AnswerSelect></AnswerSelect>
          ) : (
            <AnswerScore></AnswerScore>
          )}
        </div>
        <Link to={`/question/${idx}`}>
          <Button label={"다음"} onClick={() => setNext(idx)}></Button>
        </Link>
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
