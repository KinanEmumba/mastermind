import React from 'react'
import { ColorType, Colors } from '../utils';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const LogoStyle = styled.span`
  font-size: 50px;
  font-weight: 800;
  padding: 10px;
  background: ${props => props.color && props.color};
  color: ${props => props.color? 'white' : 'black'};
`;


const Logo = () => {
  const name1 = 'master';
  const name2 = 'mind';

  return (
    <LogoContainer>
      {Object.keys(Colors).map((col, index) => {
        console.log('Colors[col as ColorType]', Colors[col as ColorType]);
        return (
          <LogoStyle key={index} color={Colors[col as ColorType]}>
            {name1[index].toUpperCase()}
          </LogoStyle>
        );
      })}
      {Array.from(name2).map(ch =><LogoStyle>{ch.toUpperCase()}</LogoStyle>)}
    </LogoContainer>
  )
}

export default Logo