import styled from "styled-components";
import rankImg1 from "../assets/Rank1.svg";
import rankImg2 from "../assets/Rank2.svg";
import rankImg3 from "../assets/Rank3.svg";
import { useEffect, useState } from "react";

const AnswerRank = ({ setAnswerData }: any) => {
  const [rank, setAnswer] = useState({});
  setAnswerData(rank);

  return (
    <AnswerRankWrapper>
      <RankWrapper className="rank2">
        <RankInput
          onChange={(e) => setAnswer({ ...rank, rank2: e.target.value })}
          name="rank2"
          placeholder="답변입력2위"
        ></RankInput>
        <RankImg src={rankImg2}></RankImg>
      </RankWrapper>

      <RankWrapper>
        <RankInput
          onChange={(e) => setAnswer({ ...rank, rank1: e.target.value })}
          placeholder="답변입력1위"
        ></RankInput>
        <RankImg src={rankImg1}></RankImg>
      </RankWrapper>

      <RankWrapper className="rank3">
        <RankInput
          onChange={(e) => setAnswer({ ...rank, rank3: e.target.value })}
          placeholder="답변입력3위"
        ></RankInput>
        <RankImg src={rankImg3} className="rank3"></RankImg>
      </RankWrapper>
    </AnswerRankWrapper>
  );
};

const AnswerRankWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  min-height: 200px;
`;

const RankImg = styled.img`
  width: 100px;
`;

const RankWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  &.rank2 {
    margin-top: 60px;
  }

  &.rank3 {
    margin-top: 75px;
  }
`;

const RankInput = styled.input`
  max-width: 60px;
  border: none;
  background: none;

  &:focus {
    color: #525252;
    outline: none;
  }

  &:placeholder {
    color: #525252;
  }
`;

export default AnswerRank;
