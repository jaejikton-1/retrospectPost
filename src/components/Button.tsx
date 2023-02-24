import { Link } from "react-router-dom";
import styled from "styled-components";
const Button = ({ label }: any) => {
  return <ButtonWrapper>{label}</ButtonWrapper>;
};

const ButtonWrapper = styled.div`
  border-radius: 40px;
  background-color: #222;
  padding: 12px;
  color: #fff;
  text-align: center;
`;

export default Button;
