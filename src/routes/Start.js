import styled from 'styled-components';
import Hotel from '../assets/Hotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg';
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv } from './styles/style';
import Auth from './Auth';

const Start = () => {
    const history = useHistory();
    const onclickLoginBar = () => {
        history.push("/login");
    }
    const onclickSignupBar = () => {
        history.push("/signup");
    }
  return (
      <>
      <Container>
        <TitleDiv>나의 회고록</TitleDiv>
        <TitleDiv>HeyGo</TitleDiv>
        <TitleDiv>고양이 우체통</TitleDiv>
        <HotelImg src={Hotel} />
        <Auth/>
        <ButtonLayout>
            <img src={LoginBar} onClick={onclickLoginBar} />
        </ButtonLayout>
      </Container>
      </>
  )
}

export default Start;

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
`
