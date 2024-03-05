import styled from 'styled-components';
import { Colors } from 'src/utils';
import { ColorType } from 'src/shared-types';

const LogoContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;

const LogoStyle = styled.span`
  font-size: 40px;
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
        return (
          <LogoStyle key={index} color={Colors[col as ColorType]}>
            {name1[index].toUpperCase()}
          </LogoStyle>
        );
      })}
      {Array.from(name2).map((ch, index) => {
        return (
          <LogoStyle key={index}>
            {ch.toUpperCase()}
          </LogoStyle>
        )
      })}
    </LogoContainer>
  )
}

export default Logo

// UI library with theme/styling