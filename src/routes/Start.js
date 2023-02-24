import styled from 'styled-components';
import PostByStart from '../assets/PostByStart.svg';
import {useHistory} from 'react-router-dom';
import {Container, TitleDiv} from './styles/style';
import Auth from './Auth';

const Start = () => {
    const history = useHistory();

    const onclickPath = () => {
        history.push("/signup");
    }

    return (
        <>
            <Container>
                <TitleDiv>나의 회고록</TitleDiv>
                <TitleDiv>HeyGo</TitleDiv>
                <TitleDiv>고양이 우체통</TitleDiv>
                <HotelImg src={PostByStart}/>
                <Auth/>
            </Container>
        </>
    )
}

export default Start;

const ButtonLayout = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
`
const HotelImg = styled.img`
    width: 180px;
    height: 285px;
    margin-top: 36px;
`