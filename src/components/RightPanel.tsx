import styled from 'styled-components';
import Circle from 'src/components/Circle';
import { Colors } from 'src/utils';
import { ColorType } from 'src/shared-types';

const StyledRightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100px;
  margin: 0px 20px;
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