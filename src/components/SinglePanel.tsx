import { useEffect, useState } from 'react';
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
  selectedColor
}: {
  selectedColor: ColorType | null
}) => {
  const allUnselected = new Array(4).fill({color: undefined, selected: false});
  const [panelState, setPanelState] = useState(allUnselected);
  const [selectedCircle, setSelectedCircle] = useState<undefined | number>(undefined);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    let allSelectedFlag = true;
    panelState.forEach(circle => {
      allSelectedFlag = !!circle.color && allSelectedFlag
    });
    setAllSelected(allSelectedFlag);
  }, [panelState]);
  
  useEffect(() => {
    if (selectedColor && selectedCircle !== undefined) {
      const selectionArr = panelState.map((item, itemIndex) => {
        return {
          selected: item.selected,
          color: itemIndex === selectedCircle ? selectedColor : panelState[itemIndex].color
        };
      });
      setPanelState(selectionArr);
    }
  }, [panelState, selectedCircle, selectedColor]);

  const onCircleClick = (index: number) => {
    const selectionArr = panelState.map((item, itemIndex) => {
      return {
        selected: (itemIndex === index),
        color: item.color
      };
    });
    setSelectedCircle(index);
    setPanelState(selectionArr);
  };

  return (
    <StyledPanel>
      {panelState.map((val, index) => {
        return (
          <Circle
            key={index}
            color={Colors[val.color as ColorType]}
            isSelected={val.selected}
            onClick={() => onCircleClick(index)}
          />
        )
      })}
      {allSelected && '✓'}
      <OutputCircles />
    </StyledPanel>
  )
}

export default SinglePanel