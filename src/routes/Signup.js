import {Container, InputStyle, TitleDiv} from './styles/style';
import styled from 'styled-components';
import {RedButton} from './styles/buttonstyle';
import {useState} from 'react';

const Signup = () => {


    return (
        <>
            <Container>
                <TitleDiv>회고 우체국</TitleDiv>
                <InputLayout2>
                    <InputStyle placeholder='닉네임'/>
                    <InputStyle placeholder='아이디'/>
                    <InputStyle placeholder='비밀번호'/>
                    <InputStyle placeholder='비밀번호 확인'/>
                </InputLayout2>
                <RedButton disabled={true}
                    type="submit">내 호텔 만들기</RedButton>
            </Container>
        </>
    )
}

export default Signup

const InputLayout2 = styled.div `
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: 72px;
    margin-bottom: 39px;
`
