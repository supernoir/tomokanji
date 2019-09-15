import styled from 'styled-components';
import { Navigation } from './index';

export const StyledNavigation = styled(Navigation)`
  margin: 2em 0 4em;
  display: flex;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`;
