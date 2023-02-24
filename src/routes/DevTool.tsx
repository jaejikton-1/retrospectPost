import { dbService, authService } from "../fbase";

import styled from "styled-components";
import { InputStyle } from "./styles/style";
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useTranslation } from "react-i18next";

const DevTool = ({ userObj }: any) => {
  //const { t, i18n } = useTranslation()

  const { id } = useParams(); // hetelOwnerId

  const [goalCount, setGoalCount] = useState(0);
  const [windowCount, setWindowCount] = useState(2);
  const [windowInfoIndex, setWindowInfoIndex] = useState(0);
  //const history = useHistory();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // if (userObj.uid == "sksKvNWFPBe5ZmJtNCdbGUh5jYk1") {
    //   setIsAdmin(true);
    // }
    /*dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setDescription(doc.data().description === "" ? "" : doc.data().description)
        });*/
  }, []);

  const onChangeWindowInfoIndex = (event: any) => {
    const {
      target: { value },
    } = event;
    setWindowInfoIndex(value);
  };
  const onChangeWindowCount = (event: any) => {
    const {
      target: { value },
    } = event;
    setWindowCount(value);
  };
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setGoalCount(value);
  };

  const onSubmitWindowInfo = async (event: any) => {
    event.preventDefault();

    // dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
    //     setWindowInfo(doc.data().windowInfo);
    // });

    await dbService
      .collection("hotelOwner")
      .doc(id)
      .update({
        [`windowInfo.${windowInfoIndex}`]: true,
        //  windowCount : i,
      });

    alert(`info index ${windowInfoIndex}개 로 변경`);
    //history.push("/hotel/" + userObj.uid);
  };
  // 창문을 닫아 버리자!
  const onSubmitWindowClose = async (event: any) => {
    event.preventDefault();

    await dbService
      .collection("hotelOwner")
      .doc(id)
      .update({
        [`windowInfo.${windowInfoIndex}`]: false,
        //  windowCount : i,
      });

    alert(`info index ${windowInfoIndex}개 로 변경`);
    //history.push("/hotel/" + userObj.uid);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    await dbService.collection("AdminConfig").doc("AdminConfig").update({
      goalCount: goalCount,
    });

    alert(`오늘의 편지 갯수 ${goalCount}개 로 변경`);
    //history.push("/hotel/" + userObj.uid);
  };
  const onSubmitWindowCount = async (event: any) => {
    event.preventDefault();

    await dbService.collection("hotelOwner").doc(id).update({
      windowCount: windowCount,
    });

    alert(`windowCount ${windowCount}개 로 변경`);
    //history.push("/hotel/" + userObj.uid);
  };
  const addQuestionList = async (event: any) => {
    event.preventDefault();
    // collection = table

    await dbService.collection("questionList").add(
      /*{
          question: "이번 달 가장 맘에 드는 소비템 TOP 3",
          answer_type: "rank",
        }*/
      /*,{
        question: "내 삶의 이유는 무엇인가요?",
        answer_type: "sentence",
      }
      */
      /*{
        question: "내 최애 맛집들을 소개해주세요",
        answer_type: "word",
      },*/
      
      {
        question: "수지님의 2월은 어땠나요?",
        answer_type: "score",
      }
    );

    alert(`질문 테이블 삽입`);
    //history.push("/hotel/" + userObj.uid);
  };

  // 기본 로그인 테스트
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onChangeEmailAndPassword = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password1") {
      setPassword1(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
  };

  const onSubmitSignUpTest = async (event: any) => {
    event.preventDefault();

    try {
      if (password1 == password2) {
        await authService.createUserWithEmailAndPassword(email, password1);
        alert("회원가입 성공!");
      } else if (password1 == "" || password2 == "") {
        alert("비밀번호를 입력해주세요.");
      } else if (password1 != password2) {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      //alert(error.message);
    }
  };

  return !isAdmin ? (
    <>
      <Container>
        <div
          style={{ marginTop: "141px", fontSize: "30px", fontWeight: "bold" }}
        >
          관리자페이지
        </div>
        <br />
        <br />
        <form onSubmit={addQuestionList}>
          <RedButton>질문데이터삽입</RedButton>
        </form>
        <br />
        <div
          style={{
            height: "29px",
            fontSize: "20px",
            fontWeight: "500px",
          }}
        >
          창문 열기
        </div>
        <NicknameInput>
          <InputStylenick
            type="text"
            placeholder="일자 입력"
            onChange={onChangeWindowInfoIndex}
          />
        </NicknameInput>
        <br />
        <form onSubmit={onSubmitWindowInfo}>
          <RedButton>창문 열기</RedButton>
        </form>

        <br />
        <div
          style={{
            height: "29px",
            fontSize: "20px",
            fontWeight: "500px",
          }}
        >
          창문 닫기
        </div>
        <NicknameInput>
          <InputStylenick
            type="text"
            placeholder="일자 입력"
            onChange={onChangeWindowInfoIndex}
          />
        </NicknameInput>
        <br />
        <form onSubmit={onSubmitWindowClose}>
          <RedButton>창문 닫기</RedButton>
        </form>
        <div
          style={{
            height: "29px",
            fontSize: "20px",
            fontWeight: "500px",
          }}
        >
          오늘의 편지 최대 갯수
        </div>
        <HotelGuide>사용자가 받을 수 있는 최대 편지 수</HotelGuide>

        <NicknameInput>
          <InputStylenick
            type="text"
            placeholder="숫자 입력"
            onChange={onChange}
          />
        </NicknameInput>
        <br />
        <form onSubmit={onSubmit}>
          <RedButton>편지 갯수 변경</RedButton>
        </form>
        <br />
        <br />
        <div
          style={{
            height: "29px",
            fontSize: "20px",
            fontWeight: "500px",
          }}
        >
          X일차 창문 컨트롤
        </div>
        <HotelGuide>
          사용자가 오류로 인해, 날짜가 하루 지나도 다음 창문으로 카운팅
          되지않을때 사용
        </HotelGuide>
        <HotelGuide>
          사용법: url에 AdventCalendar#/adminConfig/(ID) 를 삽입
        </HotelGuide>
        <HotelGuide>
          예시: 1일차에 10개를 쌓았으나, 2일차에도 10개에 계속 이어간다면,
          숫자를 2를 주면 2번째 창문으로 넘어감.
        </HotelGuide>
        <NicknameInput>
          <InputStylenick
            type="text"
            placeholder="일자 입력"
            onChange={onChangeWindowCount}
          />
        </NicknameInput>
        <br />
        <form onSubmit={onSubmitWindowCount}>
          <RedButton>창문 일자 변경</RedButton>
        </form>

        <br />
        <br />
        <br />
        <Container>
          <form onSubmit={onSubmitSignUpTest}>
            <h1 style={{ fontFamily: "humanbeomseok", fontSize: "25px" }}>
              회원가입 테스트
            </h1>
            <InputLayout2>
              <InputStyle
                placeholder="이메일"
                name="email"
                type="email"
                required
                value={email}
                onChange={onChangeEmailAndPassword}
              />
              <InputStyle
                placeholder="비밀번호"
                name="password1"
                type="password"
                required
                value={password1}
                onChange={onChangeEmailAndPassword}
              />
              <InputStyle
                placeholder="비밀번호 확인"
                name="password2"
                type="password"
                required
                value={password2}
                onChange={onChangeEmailAndPassword}
              />
            </InputLayout2>
            <ButtonLayout>
              <RedButton type="submit">회원가입 테스트</RedButton>
            </ButtonLayout>
          </form>
        </Container>
        <br />
        <br />
        <br />
        <WhiteButton
          onClick={() => {
            //history.push("/");
          }}
        >
          시작화면
        </WhiteButton>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <HotelGuide
          style={{
            marginTop: "250px",
            fontSize: "30px",
            fontFamily: "humanbeomseok",
          }}
        >
          저희 서비스를 사용해주셔서 감사합니다.
        </HotelGuide>
        <HotelGuide
          style={{
            marginTop: "30px",
            fontSize: "30px",
            fontFamily: "humanbeomseok",
          }}
        >
          아쉽게 이 주소는 회원님이 접근할 수 없는 주소입니다.
        </HotelGuide>
        <HotelGuide
          style={{
            marginTop: "30px",
            fontSize: "30px",
            fontFamily: "humanbeomseok",
          }}
        >
          아직 호텔이 없으시다면 호텔을 만들어서 서비스를 이용해보세요!
        </HotelGuide>
      </Container>
    </>
  );
};

export default DevTool;

const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  text-align: center;
`;
const NicknameInput = styled.form`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  align-items: center;

  margin-top: 22.84px;
  margin-bottom: 20px;
`;
const TxtAreaDesc = styled.textarea`
  width: 230px;
  min-height: 93px;
  background-color: #fcf4e9;
  color: #000000;

  border-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #bab8b5;
  padding-left: 10px;
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  font-family: none;
  resize: none;
  white-space: pre-wrap;
  ::placeholder {
    color: #bab8b5;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
  }

  :focus {
    outline: none;
  }
`;
const InputStylenick = styled.input`
  width: 115px;
  height: 25px;
  background-color: #fcf4e9;
  color: #000000;

  border-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #bab8b5;
  padding-left: 10px;
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  ::placeholder {
    color: #bab8b5;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
  }

  :focus {
    outline: none;
  }
`;
const HotelGuide = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 12px;
`;

const InputLayout2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 72px;
  margin-bottom: 39px;
  align-items: center;
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12.57px;
  margin-top: 62.02px;
  margin-bottom: 142px;
  align-items: center;
`;
