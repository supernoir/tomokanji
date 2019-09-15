import styled from 'styled-components';
import { Button } from './index';

export const StyledButton = styled(Button)`
  background: ${props => props.theme.white};
  color: ${props => props.theme.primary};
  min-width: 120px;
  font-weight: 400;
  font-size: 1.2rem;
  padding: .4em .8em;
  margin: .8em 0.6em;
  border-radius: .2em;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.4s ease;
  box-shadow: 0px 4px 2px ${props => props.theme.primary};

  &:hover {
    color: ${props => props.theme.secondary};
    box-shadow: 0px 4px 2px ${props => props.theme.secondary};
    transition: box-shadow 0.4s ease-in-out;
  }
`;

export const StyledRandomButton = styled(Button)`

  background: ${props => `linear-gradient(135deg, ${props.theme.secondary}, ${props.theme.primary})`};
  color: ${props => props.theme.white};
  border: 3px solid ${props => props.theme.white};
  min-width: 120px;
  font-weight: 400;
  font-size: 1.2rem;
  padding: .4em .8em;
  margin: .8em 0.6em;
  border-radius: .2em;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.4s ease;
  box-shadow: 0px 4px 2px ${props => props.theme.primary};


    &:hover {
      background: ${props => `linear-gradient(-135deg, ${props.theme.secondary}, ${props.theme.primary})`};
      box-shadow: 0px 4px 2px ${props => props.theme.secondary};
      transition:  box-shadow 0.4s ease-in-out;
      animation-name: shake;
      animation-duration: 80ms;
      animation-iteration-count: infinite;
      animation-direction: alternate
    }
    @keyframes shake {
      from {
        transform: rotate(-2deg);
      }
      to {
        transform: rotate(2deg);
      }
      
    }
`;
