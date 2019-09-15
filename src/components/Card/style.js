import styled from 'styled-components';

export const StyledCard = styled.div`
  background: ${props => props.theme.black};
  background: rgba(0,0,0, 0.4);
  color: ${props => props.theme.black};
  padding: 1em;
  border-radius: .4em;
`;

export const StyledCardClassification = styled.p`
  margin-left: 0.6em;
  border-radius: 0.4em;
  padding: 0.2em 0.4em;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

export const StyledCardKanjiCount = styled.p`
  background: pink;
`;

export const StyledCardClassAndCount = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.white};
  margin-top: 0.8em;
  min-width: 4em;
  padding: 0.2em 0.8em;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCardDetails = styled.div`
  width: 100%;
  font-size: 1.2em;
  font-weight: 300em;
  color: ${props => props.theme.tertiary};
`;

export const StyledCardMeaning = styled.div`
  width: 100%;
  font-size: 1.8em;
  font-weight: 500;
`;

export const StyledCardFooter = styled.div`
  background: rgba(0,0,0,0.2);
  color: ${props => props.theme.white};
  padding: 2em 0.4em;
  border-radius: .4em;
  display: flex;
  flex-flow: column;
  align-items: center;
  `;

export const StyledCardKanjiContent = styled.h1`
  color: ${props => props.theme.black};
  font-size: 12em;
  line-height: 0em;
  font-weight: 300;
`;

export const StyledCardKanji = styled.div`
  background: ${props => props.theme.white};
  border-radius: .4em;
  text-align: center;
  margin: 0;
  padding: 2em;
`;

export const StyledCardBody = styled.div`
  margin: 1em 0;
  padding: 0;
`;

export const StyledCardOnyomiReadingContent = styled.p`
  font-size: 2em;
  line-height: 1.2em;
  text-shadow: 0 1px 0 ${props => props.theme.onyomi};
  background: rgba(220, 120, 80, 0.4);
  border-radius: 1em;
`;
export const StyledCardKunyomiReadingContent = styled.p`
  font-size: 2em;
  line-height: 1.2em;
  text-shadow: 0 1px 0 ${props => props.theme.kunyomi};
  background: rgba(80, 180, 160, 0.4);
  border-radius: 1em;
`;

export const StyledCardOnyomiReadingType = styled.p`
  color: ${props => props.theme.white};
  font-size: 0.8em;
  line-height: 0em;
  text-shadow: 0 1px 2px ${props => props.theme.darkonyomi};
`;

export const StyledCardKunyomiReadingType = styled.p`
  color: ${props => props.theme.white};
  font-size: 0.8em;
  line-height: 0em;
  text-shadow: 0 1px 2px ${props => props.theme.darkkunyomi};
`;

export const StyledCardOnyomi = styled.div`
  background: ${props => `linear-gradient(-30deg, ${props.theme.onyomi}, ${props.theme.lightonyomi})`};
  color: ${props => props.theme.white};
  padding: 1em;
  margin-left: 0.5em;
  width: 50%;
  height: 100%;
  border-radius: 0.2em;
  border-top: 6px solid ${props => props.theme.onyomi};
`;

export const StyledCardKunyomi = styled.div`
  background: ${props => `linear-gradient(-30deg, ${props.theme.kunyomi}, ${props.theme.lightkunyomi})`};
  color: ${props => props.theme.white};
  padding: 1em;
  margin-left: 0.5em;
  width: 50%;
  height: 100%;
  border-radius: 0.2em;
  border-top: 6px solid ${props => props.theme.kunyomi};
`;

export const StyledCardHead = styled.div`
  display: flex;
  align-content: space-between;
  margin: 0;
  height: 100%;
`;
