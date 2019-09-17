import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body {
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  font-family: "Noto Sans", sans-serif;
  background: ${props => props.theme.primary};
  margin: 0
  padding: 0
  zoom: 1;
  color: ${props => props.theme.white};
  text-align: center;
} 
`;

export const StyledApp = styled.div`
  color: ${props => props.theme.white};
  text-align: center;
  height: 100%;
  display: grid;
  grid-template-rows: 1,2;
  grid-template-columns: 1;
  background: ${props => `linear-gradient(15deg, ${props.theme.primary}, ${props.theme.secondary})`};
`;

export const StyledPage = styled.main`
  grid-row: 2;
  grid-column: 1;
  margin: 10%;
  text-align: center;
  border-radius: .4em;
`;

createGlobalStyle`${GlobalStyle}`;
