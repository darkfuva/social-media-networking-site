import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  primaryColor: "rgb(103 143 162)",
  secondaryColor: "rgb(232 241 243)",
  tertiaryColor: "rgb(129 158 171)",
  tertiaryColorHover: "rgb(7 95 137)",
  borderPrimaryColor: "rgb(193 193 193)",
  tertiaryColorGood: "rgb(129 171 135)",
  tertiaryColorBad: "rgb(171 129 129)",
};

export const GlobalStyles = createGlobalStyle`
@keyframes bounce {
  0% ,25%,75%,100%{
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
  body {
    width: calc(100vw-100%);
    scrollbar-width: 4px;        
    scrollbar-color: ${({theme})=>theme.tertiaryColor};   
    font-size: 15px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;    transition: all 0.50s linear;
  }
  
  .primaryColorBg {
    background: ${({ theme }) => theme.primaryColor};
  }
  .secondaryColorBg {
    background: ${({ theme }) => theme.secondaryColor}
  }
  .tertiaryColorHover {
    color: ${({ theme }) => theme.tertiaryColor} !important;
    fill: ${({ theme }) => theme.tertiaryColor} !important;
    transition: 0.2s;
  }
  .tertiaryColorHover:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.tertiaryColorHover} !important;
  }
  .tertiaryColorHoverGood:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.tertiaryColorGood} !important;
  }
  .tertiaryColorHoverBad:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.tertiaryColorBad} !important;
  }
  .borderPrimaryColor{
    border-color: ${({ theme }) => theme.borderPrimaryColor}
  }
  .xsFontSize p{
    font-size: 10px;
  }
  ::-webkit-scrollbar {
    margin: 10px;
    width: 6px;
  }
   
  ::-webkit-scrollbar-track {
  }
   
  ::-webkit-scrollbar-thumb {
    border-right: 4px white solid;
    background-color: ${({theme})=>theme.tertiaryColor};
  }
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    visibility: hidden;
  }
  .scrollbox-content,
  .scrollbox:hover,
  .scrollbox:focus {
  visibility: visible;
}
@media (hover: hover) { .scrollbox { visibility: hidden; }}
`;
