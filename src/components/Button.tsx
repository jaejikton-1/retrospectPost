import styled from "styled-components";
import Next from "../assets/Next.svg";
import Prev from "../assets/Prev.svg";

const Button = ({ label, setNext }: any) => {
  const onClick = () => {
    setNext();
  };
  return (
    <ButtonWrapper src={label === "다음" ? Next : Prev} onClick={onClick} />
  );
};

const ButtonWrapper = styled.img``;

export default Button;
