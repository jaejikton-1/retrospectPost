import Google from "../assets/Google.svg";
import Github from "../assets/Github.svg";
import { Container } from "./styles/style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { firebaseInstance, authService } from "../fbase";
const Auth = () => {
  const history = useNavigate();

  const onSocialClick = async (event: any) => {
    const {
      target: { name },
    } = event;
    let provider: any;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    const data = await authService.signInWithPopup(provider);

    history("/home");
    //console.log(data);
  };

  return (
    <Container>
      <ButtonStyle>
        <img src={Google} onClick={onSocialClick} />
        <img src={Github} onClick={onSocialClick} />
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
