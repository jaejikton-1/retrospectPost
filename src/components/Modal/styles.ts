import styled from "styled-components";



export const ModalCloseButton = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 1.2rem;
  height: 1.2rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1.2rem;
  &:active {
    background-color: white;
    filter: brightness(80%);
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;



