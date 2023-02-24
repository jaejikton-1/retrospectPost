import {dbService, storageService} from "fbase";
import Nweet from "../components/Nweet";

import {useHistory} from 'react-router-dom';
import {Container, TitleDiv, ButtonLayout} from './styles/style';
import {useEffect, useState} from 'react';
import {RedButton} from "./styles/buttonstyle";
import Modal from '../components/Modal/Modal';
import {CardLayout, MessageCard} from "../components/Modal/styles";
import styled from "styled-components";

import Post from '../assets/Post.svg';

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data()
            }))
            setNweets(newArray);
        })
    }, []);


    const history = useHistory();
    const toWrite = () => {
        history.push("/write");
    }

    const onClickOpenModal = () => {
        setModalOpen(true);

    }
    const onClickCloseModal = () => {
        setModalOpen((prev) => !prev);
    }

    return (
        <>
            <Container>
                <TitleDiv>회고</TitleDiv>
                <PostImg src={Post} />
                <RedButton onClick={toWrite}>회고 보내기</RedButton>
                <button onClick={onClickOpenModal}>모달창 테스트</button>
                {
                isModalOpen && <Modal closeModal={onClickCloseModal}>
                    <h1>도착한 회고</h1>
                    <CardLayout> {
                        nweets.map((nweet) => (
                            <MessageCard>
                                <Nweet key={
                                        nweet.id
                                    }
                                    nweetObj={nweet}
                                    isOwner={
                                        nweet.creatorId === userObj.uid
                                    }/>
                            </MessageCard>
                        ))
                    } </CardLayout>
                </Modal>
            } </Container>
            {/* <div>
              {
              nweets.map((nweet) => (
                  <Nweet 
                  key={nweet.id} 
                  nweetObj={nweet}
                  isOwner={nweet.creatorId === userObj.uid}
                  />
              ))}
        </div> */} </>
    )
}

export default Home;


const PostImg = styled.img`
    width: 180px;
    height: 285px;
    margin-top: 36px;
`