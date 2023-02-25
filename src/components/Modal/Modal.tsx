import React from "react";
import { Background, ModalCloseButton } from "./styles";
import { useRef } from "react";
import styled from "styled-components";
import answerImg from "../../assets/AnswerBack.svg";

const TimeTitle = () => {
  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();

    return todayYear + "." + todayMonth + "." + todayDate;
  };

  return (
    <div>
      {todayTime().slice(0, 9)}
      <span>{todayTime().slice(9, 12)}</span>
      <span>{todayTime().slice(12, 19)}</span>
    </div>
  );
};

const Modal = ({ closeModal, children }: any) => {
  const outside: any = useRef();
  const divRef = React.useRef<HTMLDivElement | null>(null)
  return (
    <Background
      ref={divRef}
      onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
    >
    <ModalWrapper>
      <ModalImg src={answerImg}></ModalImg>
      <SentenceInput placeholder="답변을 입력해주세요"></SentenceInput>
    </ModalWrapper>
    </Background>
  );
};

export default Modal;
const ModalWrapper = styled.div`
  position: relative;
  margin-top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 290px;
`;

const ModalImg = styled.img`
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

const TimeTitleLayout = styled.div`
  position: absolute;
  left: 225px;
  top: 3px;
  font-size: 12px;
  line-height: 17px;
`;
