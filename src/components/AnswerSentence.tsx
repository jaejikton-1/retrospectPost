import styled from "styled-components";
import answerImg from "../assets/AnswerBack.svg";

const AnswerSentence = () => {
  return (
    <AnswerSentenceWrapper>
      <AnswerImg src={answerImg}></AnswerImg>
      <SentenceInput placeholder="답변을 입력해주세요"></SentenceInput>
    </AnswerSentenceWrapper>
  );
};

const AnswerSentenceWrapper = styled.div`
  position: relative;
  margin-top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 290px;
`;

const AnswerImg = styled.img`
  width: 100%;
`;

const SentenceInput = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default AnswerSentence;
