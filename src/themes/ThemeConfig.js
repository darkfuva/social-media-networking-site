import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  primaryColor: 'rgb(108, 196, 237)',
  secondaryColor: 'rgb(232 241 243)',
  tertiaryColor: 'rgb(5 174 255)',
  tertiaryColorHover : 'rgb(7 95 137)',
  borderPrimaryColor: 'rgb(193 193 193)'
}

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
    font-size: 15px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;    transition: all 0.50s linear;
  }
  
  .primaryColorBg {
    background: ${({theme}) => theme.primaryColor};
  }
  .secondaryColorBg {
    background: ${({theme}) => theme.secondaryColor}
  }
  .tertiaryColorHover {
    color: ${({theme}) => theme.tertiaryColor} !important;
    fill: ${({theme}) => theme.tertiaryColor} !important;
    transition: 0.2s;
  }
  .tertiaryColorHover:hover {
    color: ${({theme}) => theme.tertiaryColorHover} !important;
  }
  .borderPrimaryColor{
    border-color: ${({theme})=>theme.borderPrimaryColor}
  }
`