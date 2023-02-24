import Google from "../assets/Google.svg";
import Github from "../assets/Github.svg";
import { Container } from "./styles/style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { firebaseInstance, authService } from "../fbase";
const Auth = () => {
  const navi = useNavigate();

  const onSocialClick = async (event: any) => {
    const {
      target: { alt },
    } = event;
    let provider: any;
    if (alt === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (alt === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    const data = await authService.signInWithPopup(provider);

    navi("/home");
    //console.log(data);
  };

  return (
    <Container>
      <ButtonStyle>
        <img src={Google} onClick={onSocialClick} alt="google"/>
        <img src={Github} onClick={onSocialClick} alt="github"/>

      </ButtonStyle>
    </Container>
  );
};

export default Auth;

const ButtonStyle = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
