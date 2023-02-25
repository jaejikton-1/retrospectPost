import { useEffect, useState } from "react";
import styled from "styled-components";
import BlackHeart from "../assets/BlackHeart.svg";
import PinkHeart from "../assets/PinkHeart.svg";

const AnswerScore = () => {
  let heartList: any = [
    {
      idx: 1,
      is_checked: true,
      text: "아쉬움이 남아요",
    },
    {
      idx: 2,
      is_checked: true,
      text: "나쁘지않은 한달이었어요",
    },
    {
      idx: 3,
      is_checked: true,
      text: "이번 달이 잘 마무리 되었어요",
    },
    {
      idx: 4,
      is_checked: false,
      text: "만족스러운 한 달 이였어요!",
    },
    {
      idx: 5,
      is_checked: false,
      text: "다음 달도 이번 달만 같으면 좋겠어요!",
    },
  ];

  const AnswerSelected = [
    "아쉬움이 남아요",
    "나쁘지않은 한달이었어요",
    "이번 달이 잘 마무리 되었어요",
    "만족스러운 한 달 이였어요!",
    "다음 달도 이번 달만 같으면 좋겠어요!",
  ];

  const [heart, setHeart] = useState([]);
  const [answerText, setAnswerText] = useState(AnswerSelected[2]);

  useEffect(() => {
    setHeart(heartList);
  }, []);

  const setFillHeart = (item: any) => {
    heartList.filter((item: any) => (item.is_checked = false));

    for (let i = 0; i < item.idx; i++) {
      heartList[i].is_checked = true;
      setHeart(heartList);
    }
    let count = 0;
    heartList.filter((item: any) => {
      if (item.is_checked) {
        count++;
      }
    });
    setAnswerText(AnswerSelected[count - 1]);
  };

  return (
    <AnswerScoreWrapper>
      <Wrapper>
        {heart.map((item: any) => (
          <HeartItem>
            <HeartImg
              src={item.is_checked ? PinkHeart : BlackHeart}
              onClick={() => setFillHeart(item)}
            ></HeartImg>
          </HeartItem>
        ))}
      </Wrapper>
      <HeartText>{answerText}</HeartText>
    </AnswerScoreWrapper>
  );
};

const AnswerScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const HeartImg = styled.img`
  width: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeartText = styled.div`
  font-size: 15px;
  margin-top: 18px;
`;

const HeartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;


export default AnswerScore;
