import React from "react";
import { ModalLayout, Background, ModalCloseButton } from "./styles";
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