import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: ${props => props.theme.black};
  opacity: 0.8;
  height: 3em;
  padding: 1em;
  display: flex;
  flex-direction:row;
  justify-content: center;
`;

export const StyledBrand = styled.span`
  margin: 0;
  color: ${props => props.theme.white};
  font-size: 2em;
  font-weight: bold;
`;

export const StyledLogo = styled.span`
  img {
  height: 6em;
  width: auto;
  }
`
//text - shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);

