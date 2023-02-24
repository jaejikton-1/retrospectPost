import styled from "styled-components";
import back from "../assets/Background.svg";
import letter from "../assets/Letter.svg";
import Button from "src/components/Button";
import AnswerSelect from "src/components/AnswerSelect";
import AnswerRank from "src/components/AnswerRank";

const Question = () => {
  return (
    <>
      <BackgroundImg>
        <div>
          <LetterImg src={letter}></LetterImg>
          <QuestionTitle>질문 내용을 입력해주세요.</QuestionTitle>
          {/* <AnswerSelect></AnswerSelect> */}
          {/* <AnswerRank></AnswerRank> */}
        </div>
        <Button label={"다음"}></Button>
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
