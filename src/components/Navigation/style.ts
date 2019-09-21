import styled from 'styled-components';

export const StyledNavigation = styled.aside`
  margin: 2em 0 4em;
  display: flex;
  width: 100%;
  justify-content: center;
  
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`;
