import { useEffect, useState } from "react";
import styled from "styled-components";
import BlackHeart from "../assets/BlackHeart.svg";
import PinkHeart from "../assets/PinkHeart.svg";

const AnswerScore = () => {
  let heartList: any = [
    {
      idx: 1,
      is_checked: true,
    },
    {
      idx: 2,
      is_checked: true,
    },
    {
      idx: 3,
      is_checked: true,
    },
    {
      idx: 4,
      is_checked: false,
    },
    {
      idx: 5,
      is_checked: false,
    },
  ];

  const [heart, setHeart] = useState([]);

  useEffect(() => {
    setHeart(heartList);
  }, []);

  const setFillHeart = (item: any) => {
    heartList.filter((item: any) => (item.is_checked = false));

    for (let i = 0; i < item.idx; i++) {
      heartList[i].is_checked = true;
      setHeart(heartList);
    }
  };

  return (
    <AnswerScoreWrapper>
      {heart.map((item: any) => (
        <HeartImg
          src={item.is_checked ? PinkHeart : BlackHeart}
          onClick={() => setFillHeart(item)}
        ></HeartImg>
      ))}
    </AnswerScoreWrapper>
  );
};

const AnswerScoreWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  min-height: 200px;
`;

const HeartImg = styled.img``;

export default AnswerScore;
