import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

export const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 768px;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'KyoboHand';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    ${reset}
    body {
        box-sizing: border-box;
        margin: 0px;
        font-family: 'KyoboHand';
    }

    * {
        box-sizing: border-box;
        font-family: 'KyoboHand';
    }
`;