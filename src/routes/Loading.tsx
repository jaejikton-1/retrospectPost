import styled from "styled-components";
import PostByStart from "../assets/PostByStart.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Loading = () => {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/result");
    }, 2000);
  });

  return (
    <Wrapper>
      <Text>
        고영희 집배원이 <br />
        <b>편지</b>를 배달중입니다 💌
      </Text>
      <Img src={PostByStart} />

      <Sub>편지가 거의 도착했어요!</Sub>
    </Wrapper>
  );
};

const Img = styled.img`
  width: 180px;
  margin-top: 30px;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  margin-top: -30px;

  b {
    color: #ff89a9;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Sub = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export default Loading;
