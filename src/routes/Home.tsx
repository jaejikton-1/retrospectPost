import Nweet from "../components/Nweet";

import { useNavigate } from "react-router-dom";
import { Container, TitleDiv, ButtonLayout } from "./styles/style";
import { useEffect, useState } from "react";
import { RedButton } from "./styles/buttonstyle";
import LetterModal from "../components/Modal/LetterModal";

import styled from "styled-components";

import Post from "../assets/Post.svg";
import OKButtonImg from "../assets/OKButton.svg";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Person.svg";

const Home = ({ userObj }: any) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const history = useNavigate();
  const toPost = () => {
    history("/post");
  };
  const toWrite = () => {
    history("/question/1");
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const onClickOpenModal = () => {
    setModalOpen(true);
  };
  const onClickCloseModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <Container>
        <LogoImg>
          <img className="img" src={Logo} />
          <Icon src={Profile} />
        </LogoImg>
        <PostImg src={Post} />
        <Text>
          고영희 집배원이 <br />
          <b>3통</b>의 편지를 가져왔어요!
        </Text>
        <SubText>떠나기 전에 답장해볼까요?</SubText>
        <OKButton src={OKButtonImg} onClick={onClickOpenModal} />
        {isModalOpen && <LetterModal closeModal={onClickCloseModal} />}{" "}
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

const OKButton = styled.img`
  width: 60px;
  height: 58px;
  margin-top: 36px;
`;
const LogoImg = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  justify-content: space-between;
  .img {
    width: 114px;
  }
`;

const PostImg = styled.img`
  width: 180px;
  height: 285px;
  margin-top: 36px;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 28px;

  b {
    color: #ff89a9;
  }
`;

const SubText = styled.div`
  font-size: 16px;
  color: #494545;
  margin-top: 20px;
`;

const Icon = styled.img`
  width: 40px;
`;