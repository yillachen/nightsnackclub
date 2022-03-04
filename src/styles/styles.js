import styled, { createGlobalStyle } from "styled-components";
import { BigCaslon, HelveticaLTRoman } from "../../public/fonts/fonts";

export default createGlobalStyle`
  @font-face {
    font-family: 'Big Caslon';
    src: local('Big Caslon'),
    url(${BigCaslon}) format('truetype');
    font-style: normal;
  };
  @font-face {
    font-family: 'Helvetica Roman';
    src: local('Helvetica Roman'),
    url(${HelveticaLTRoman}) format('opentype');
    font-style: normal;
  };
`;

// Branded Colors
export const BgColors = {
  index: "#ffd9b7",
  asianwomxn: "#fff0dc",
  illustrators: '#0b1676',
  spiritual: '#ddd2f5',
  blog: '#0a4d4d',
  health: '#ffe2b7',
  nightsnack: '#c6d2cf'
}

