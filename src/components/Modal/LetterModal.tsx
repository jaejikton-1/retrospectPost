import React from "react";
import { Background, ModalCloseButton } from "./styles";
import { useRef } from "react";
import styled from "styled-components";
import answerImg from "../../assets/AnswerNext.svg";
import CloseButton from "../../assets/CloseButton.svg";
import { useNavigate } from "react-router";

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

  const history = useNavigate();
  const toPost = () => {
    history("/question/1");
  };

  return (
    <Background
    ref={divRef}
    onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
    >
    
    <ModalWrapper>
    <StampLayout src={CloseButton} onClick={closeModal}/>
      <ModalImg onClick={toPost} src={answerImg}></ModalImg>
    </ModalWrapper>
    </Background>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: relative;
  margin-top: 300px;
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


const StampLayout = styled.img`
  position: absolute;
  width: 42px;
  height: 42px;
  left: 260.5px;
  bottom: 140px
`