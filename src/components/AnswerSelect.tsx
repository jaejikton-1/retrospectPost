import { Link } from "react-router-dom";
import styled from "styled-components";
const AnswerSelect = () => {
  return (
    <AnswerSelectWrapper>
      <Chips color="red">#선택됨</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨2233333</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨222</Chips>
      <Chips>#선택됨22</Chips>
      <Chips>#선택됨22</Chips>
    </AnswerSelectWrapper>
  );
};

const AnswerSelectWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Chips = styled.div`
  border-radius: 40px;
  padding: 8px 10px;
  text-align: center;
  margin-right: 5px;
  margin-top: 5px;
  color: ${(props) => (props.color == "red" ? "#fff" : "#525252")};
  background: ${(props) => (props.color == "red" ? "#f26363" : "#FFFFFF")}; ;
`;

export default AnswerSelect;
