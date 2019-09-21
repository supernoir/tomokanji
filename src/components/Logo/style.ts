import styled from 'styled-components';
import { Logo, Highlight, Brand } from './index';

export const StyledHeader = styled.header`
  grid-row: 1;
  grid-column: 1;
  background: ${props => props.theme.black};
  opacity: 0.8;
  height: 3.5em;
  display: flex;
  justify-content: center;
`;

export const StyledBrand = styled(Brand)`
  display: flex;
  flex-flow: row;
  padding: 0.2em;
`;

export const StyledLogo = styled(Logo)`
    margin: 0.2em 0.4em;
    color: ${props => props.theme.white};
    font-weight: light;
    font-size: 18px;
    text-shadow: 0px 2px 3px ${props => props.theme.black};
`;

export const StyledHighlight = styled(Highlight)`
  color: ${props => props.theme.tertiary};
  font-weight: bold;
`;
