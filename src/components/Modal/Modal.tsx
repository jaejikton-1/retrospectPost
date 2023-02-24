import React from "react";
import { Background, ModalCloseButton } from "./styles";
import { useRef } from "react";
import styled from "styled-components";

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
  const outside = useRef();
  return (
    <Background
      //   ref={outside}
      onClick={(e) => {
        if (e.target == outside.current) {
          closeModal(false);
        }
      }}
    >
      <ModalLayout>
        <TimeTitleLayout>
          <TimeTitle />
        </TimeTitleLayout>
        {/* <ModalCloseButton onClick={() => closeModal(false)} /> */}
        {children}
        {/* <ModalButton onClick={() => closeModal(true)}>{buttonText}</ModalButton> */}{" "}
      </ModalLayout>
    </Background>
  );
};

export default Modal;

const TimeTitleLayout = styled.div`
  position: absolute;
  left: 225px;
  top: 3px;
  font-size: 12px;
  line-height: 17px;
`;


const ModalLayout = styled.div`
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* max-height: 50%; */
  width: 219px;
  height: 435px;
  background: white;
  border-radius: 5px;
  text-align: center;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border: 3px solid #a4d6cb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  h1 {
    margin-top: 30px;
    margin-bottom: 28px;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
  }
`;