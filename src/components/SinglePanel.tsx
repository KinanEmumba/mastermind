import styled from 'styled-components';
import Circle from './Circle';
import OutputCircles from './OutputCircles';
import { ColorType, Colors } from '../utils';

const StyledPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 400px;
  max-height: 100px;
`;

const SinglePanel = ({
  panelState,
  onCircleClick,
}: {
  panelState: {selected: boolean, color: ColorType}[],
  onCircleClick: (index: number) => void;
}) => {
  console.log('pannel items', panelState);
  return (
    <StyledPanel>
      {panelState.map((val, index) => <Circle
        key={index}
        color={Colors[val.color]}
        isSelected={val.selected}
        onClick={() => onCircleClick(index)}
      />)}
      <OutputCircles />
    </StyledPanel>
  )
}

export default SinglePanel