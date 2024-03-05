import styled from 'styled-components';
import Circle from 'src/components/Circle';
import { Colors } from 'src/utils';
import { ColorType, SetColorType } from 'src/shared-types';

const StyledRightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100px;
  margin: 0px 20px;
`;

const RightPanel = ({
  setClickedColor
}: {
  setClickedColor: SetColorType
}) => {
  const colorArray = Object.keys(Colors) as ColorType[];
  return (
    <StyledRightPanel>
      {colorArray.map((color: ColorType, index) => {
        return (
          <Circle
            key={index}
            color={Colors[color]}
            onClick={() => setClickedColor(color)}
          />
        );
      })}
    </StyledRightPanel>
  )
}

export default RightPanel