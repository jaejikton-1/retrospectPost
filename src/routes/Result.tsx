import styled from "styled-components";
import ProfileImg from "../assets/Profile.svg";
import PinkHeart from "../assets/PinkHeart.svg";
import BlackHeart from "../assets/BlackHeart.svg";
import back from "../assets/Back.svg";
import Line from "../assets/Line.svg";
import AnswerImg from "../assets/AnswerImg.svg";
import rankImg1 from "../assets/Rank1.svg";
import rankImg2 from "../assets/Rank2.svg";
import rankImg3 from "../assets/Rank3.svg";
import ChipImg from "../assets/Chip.svg";
import TImg from "../assets/TImg.svg";
import ShareIcon from "../assets/ShareIcon.svg";
import HomeIcon from "../assets/Home.svg";
import Share2Icon from "../assets/Action.svg";
import { useNavigate } from "react-router";

const Result = () => {
  const history = useNavigate();
  const onClick = () => {
    history("home");
  };

  return (
    <>
      <Header>
        <img src={HomeIcon} onClick={onClick} />
        <img src={Share2Icon} />
      </Header>
      <Wrapper>
        <Profile>
          <Img src={ProfileImg} />
          <Text>홍길동의 2월 회고록</Text>
          <Sub>만족스러운 한 달 이에요!</Sub>

          <HeartWrapper>
            <HeartImg src={PinkHeart}></HeartImg>
            <HeartImg src={PinkHeart}></HeartImg>
            <HeartImg src={PinkHeart}></HeartImg>
            <HeartImg src={PinkHeart}></HeartImg>
            <HeartImg src={BlackHeart}></HeartImg>
          </HeartWrapper>
        </Profile>
        <ContentWrapper>
          <Question>가장 생각나는 문장</Question>
          <Answer>“ 괜찮아. 두 배로 여행하면 돼. - 쉬운 천국“</Answer>

          <LineImg src={Line}></LineImg>

          <Question>나에게 영향을 준 세명</Question>
          <Answer>
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
          </Answer>

          <LineImg src={Line}></LineImg>

          <Question>가장 많이 연락한 사람</Question>
          <Answer>
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
          </Answer>

          <LineImg src={Line}></LineImg>

          <Question>이번달 소비취향</Question>
          <AnswerRankWrapper>
            <RankWrapper className="rank2">
              <Ranking>사건의 지평성</Ranking>
              <RankImg src={rankImg2}></RankImg>
            </RankWrapper>

            <RankWrapper>
              <Ranking>사건의 지평성</Ranking>
              <RankImg src={rankImg1}></RankImg>
            </RankWrapper>

            <RankWrapper className="rank3">
              <Ranking>사건의 지평성</Ranking>
              <RankImg src={rankImg3} className="rank3"></RankImg>
            </RankWrapper>
          </AnswerRankWrapper>

          <LineImg src={Line}></LineImg>

          <Question>이번달 소비취향</Question>
          <Answer>
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={AnswerImg} />
              <span>이무개씨</span>
            </AnswerWrapper>
          </Answer>

          <LineImg src={Line}></LineImg>

          <Question>다음달 목표 키워드</Question>
          <Answer>
            <ChipWrapper>
              <img src={ChipImg} /> &nbsp;
              <img src={ChipImg} /> &nbsp;
              <img src={ChipImg} />
            </ChipWrapper>
          </Answer>
          <LineImg src={Line}></LineImg>

          <Question>나에게 영향을 준 세명</Question>
          <Answer>
            <AnswerWrapper>
              <img src={TImg} />
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={TImg} />
            </AnswerWrapper>
            &nbsp;
            <AnswerWrapper>
              <img src={TImg} />
            </AnswerWrapper>
          </Answer>
        </ContentWrapper>
        <ShareText> 내 회고록 공유하기</ShareText>
        <ShareIconImg src={ShareIcon} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 80px;
`;

const Text = styled.div`
  font-size: 24px;
  margin-top: 10px;
  font-weight: bold;
`;

const Profile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-cotents: center;
  align-items: center;
  padding: 30px;
`;

const Sub = styled.div`
  font-size: 16px;
  margin-top: 15px;
`;

const HeartImg = styled.img`
  width: 30px;
`;

const HeartWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 1500px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(${back});
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Question = styled.div`
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
`;

const Answer = styled.div`
  display: flex;
  font-size: 15px;
  color: #494545;
  margin-top: 15px;

  img {
    width: 100px;
  }
`;

const LineImg = styled.img`
  margin-top: 30px;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const ChipWrapper = styled.div`
  display: flex;
`;

const Ranking = styled.div``;

const ShareText = styled.div`
  margin-top: 50px;
  font-size: 20px;
`;

const ShareIconImg = styled.img`
  width: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px;
`;

export default Result;
