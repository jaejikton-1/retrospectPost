import styled from "styled-components";
import rank1 from "../assets/Rank1.svg";
import rank2 from "../assets/Rank2.svg";
import rank3 from "../assets/Rank3.svg";

const AnswerRank = () => {
  return (
    <AnswerRankWrapper>
      <RankWrapper className="rank2">
        <RankInput placeholder="답변입력2위"></RankInput>
        <RankImg src={rank2}></RankImg>
      </RankWrapper>

      <RankWrapper>
        <RankInput placeholder="답변입력1위"></RankInput>
        <RankImg src={rank1}></RankImg>
      </RankWrapper>

      <RankWrapper className="rank3">
        <RankInput placeholder="답변입력3위"></RankInput>
        <RankImg src={rank3} className="rank3"></RankImg>
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
