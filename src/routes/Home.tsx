import Nweet from "../components/Nweet";

import { useNavigate } from "react-router-dom";
import { Container, TitleDiv, ButtonLayout } from "./styles/style";
import { useEffect, useState } from "react";
import { RedButton } from "./styles/buttonstyle";
import Modal from "../components/Modal/Modal";
import styled from "styled-components";

import Post from "../assets/Post.svg";
import React from "react";

const Home = ({ userObj }: any) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");



  const history = useNavigate();
  const toPost = () => {
    history("/post");
  };
  const toWrite = () => {
    history("/write");
  };



  return (
    <>
      <Container>
        <TitleDiv>회고</TitleDiv>
        <PostImg src={Post} />
        <RedButton onClick={toWrite}>회고 보내기</RedButton>
        <RedButton onClick={toPost}>회고 보기</RedButton>
        {" "}
      </Container>
      {/* <div>
              {
              nweets.map((nweet) => (
                  <Nweet 
                  key={nweet.id} 
                  nweetObj={nweet}
                  isOwner={nweet.creatorId === userObj.uid}
                  />
              ))}
        </div> */}{" "}
    </>
  );
};

export default Home;

const PostImg = styled.img`
  width: 180px;
  height: 285px;
  margin-top: 36px;
`;
