import styled from 'styled-components';
import Circle from './Circle';
import { ColorType, Colors } from '../utils';

const StyledRightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100px;
  margin: 50px;
  border: 1px solid black;
`;

const RightPanel = ({
  onRightCircleClick
}: {
  onRightCircleClick: (color: ColorType) => void
}) => {
  const colorArray = Object.keys(Colors) as ColorType[];
  return (
    <StyledRightPanel>
      {colorArray.map((color: ColorType, index) => {
        return (
          <Circle
            key={index}
            color={Colors[color]}
            onClick={() => onRightCircleClick(color)}
          />
        );
      })}
    </StyledRightPanel>
  )
}

export default RightPanel