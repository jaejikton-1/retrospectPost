import ChipImg from "../assets/Chip.svg";
import styled from "styled-components";
const AnswerSelect = ({ setAnswerData }: any) => {
  return (
    <AnswerSelectWrapper>
      <ChipWrapper>
        <Chips src={ChipImg} color="red"></Chips>
        <ChipsInput placeholder="???"></ChipsInput>
      </ChipWrapper>

      <ChipWrapper>
        <Chips src={ChipImg} color="red"></Chips>
        <ChipsInput placeholder="???"></ChipsInput>
      </ChipWrapper>

      <ChipWrapper>
        <Chips src={ChipImg} color="red"></Chips>
        <ChipsInput placeholder="???"></ChipsInput>
      </ChipWrapper>
    </AnswerSelectWrapper>
  );
};

const AnswerSelectWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Chips = styled.img``;

const ChipWrapper = styled.div`
  position: relative;
`;

const ChipsInput = styled.input`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: none;
  border: none;
  padding: 10px;
  text-align: center;

  &:focus {
    outline: none;
  }
  &:placeholder {
    text-align: center;
  }
`;

export default AnswerSelect;
