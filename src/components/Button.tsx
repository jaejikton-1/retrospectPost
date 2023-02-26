import { Link } from "react-router-dom";
import styled from "styled-components";
const Button = ({ label, setNext }: any) => {
  const onClick = () => {
    setNext();
  };
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};

const ButtonWrapper = styled.div`
  border-radius: 40px;
  background-color: #222;
  padding: 12px;
  color: #fff;
  text-align: center;
`;

export default Button;
