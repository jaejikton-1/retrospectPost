import styled from "styled-components";
import PostByStart from "../assets/PostByStart.svg";
import { useNavigate } from "react-router-dom";
import { Container, TitleDiv } from "./styles/style";
import Auth from "./Auth";
import React from "react";

const Start = () => {
  const history = useNavigate();

  const onclickPath = () => {
    history("/signup");
  };

  return (
    <>
      <Container>
        <HotelImg src={PostByStart} />
        <Text>
          고영희 집배원이 <br />
          <b>2월</b>의 편지를 가져왔어요!
        </Text>
        <SubText>떠나기 전에 답장해볼까요?</SubText>
        <Auth />
      </Container>
    </>
  );
};

export default Start;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 28px;

  b {
    color: #ff89a9;
  }
`;
const HotelImg = styled.img`
  width: 180px;
  height: 285px;
  margin-top: 36px;
`;

const SubText = styled.div`
  font-size: 16px;
  color: #494545;
  margin-top: 20px;
`;
