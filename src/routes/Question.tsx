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

export type IProps = {
  question: string;
  answer_type: string;
};

const Question = () => {
  const { id }: any = useParams();
  const [curQuiz, setQuiz] = useState<IProps>();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const num = parseInt(id);
    if (questionList) {
      setQuiz(questionList[num - 1]); //렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
      setIdx(num + 1);
    }
  });

  const setNext = (idx: number) => {
    setIdx(idx + 1);
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
          ) : (
            <AnswerSelect></AnswerSelect>
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
