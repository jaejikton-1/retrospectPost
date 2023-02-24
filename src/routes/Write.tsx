import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
  Container,
  WriteTitleDiv,
  ButtonLayout,
  LetterStyle,
} from "./styles/style";
import { RedButton } from "./styles/buttonstyle";
import Letter from "../assets/Letter.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
import { dbService, storageService } from "../fbase";

const Write = ({ userObj }: any) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");

  const [value, setValue] = useState("");
  const ref: any = useRef();

  useEffect(() => {
    // textarea scroll height 설정
    ref.current.style.height = "0px";
    const scrollHeight = ref.current.scrollHeight;
    ref.current.style.height = scrollHeight + "px";
  }, [value]);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      // file
      const attRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await attRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    // text by db
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    });

    setNweet("");
    setAttachment("");
  };

  const onChange = (event: any) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setNweet(value);

    const v = event.target.value;
    setValue(v);
  };

  const onFileChange = (event: any) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment("");

  // const buttonDisabled = nweet && Input;

  const history = useNavigate();
  const onClickSuccessWrite = () => {
    history("/writesuccess");
  };

  return (
    <>
      <Container>
        <LetterDiv>📩</LetterDiv>
        <br />
        <WriteTitleDiv>
          회고록
          <br />
          문서 작성
        </WriteTitleDiv>
        <Textarea
          ref={ref}
          value={nweet}
          onChange={onChange}
          placeholder="회고록 작성!"
          maxLength={1000}
        />
        <Input type="text" placeholder="닉네임을 입력하세요 (10자 이하)" />
        <form onSubmit={onSubmit}>
          <RedButton
            type="submit"
            disabled={true}
            onClick={onClickSuccessWrite}
            value="Nw"
          >
            보내기
          </RedButton>
        </form>
        <FileInput type="file" accept="image/*" onChange={onFileChange} />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}{" "}
      </Container>
    </>
  );
};

export default Write;

const Textarea = styled.textarea`
  overflow: hidden;

  box-sizing: border-box;
  min-height: 183px;
  width: 293px;
  margin-top: 33px;
  padding-top: 25px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;

  text-align: center;
  font-size: 13px;
  line-height: 19px;

  :focus::placeholder {
    color: transparent;
  }

  ::placeholder {
    color: #bab8b5;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
  }
`;
const Input = styled.input`
  box-sizing: border-box;

  width: 293px;
  height: 39px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  margin: 20px;

  text-align: center;
  font-size: 13px;
  line-height: 19px;

  :focus::placeholder {
    color: transparent;
  }

  ::placeholder {
    font-size: 13px;
    line-height: 19px;
    color: #bab8b5;
    text-align: center;
  }
`;

const FileInput = styled.input`
  margin-top: 24px;
`;

const LetterDiv = styled.div`
  font-size: 50px;
`;
