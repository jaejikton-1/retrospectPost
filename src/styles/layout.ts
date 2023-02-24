import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

export const MediaDiv = styled.div`
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    margin: 0 auto;
    background-color: #FCF4E9;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'KyoboHandwriting2021sjy';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KyoboHandwriting2021sjy.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    ${reset}
    body {
        margin: 0px;
        font-family: 'KyoboHandwriting2021sjy';
    }

    * {
        font-family: 'KyoboHandwriting2021sjy';
    }
`;