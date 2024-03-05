import { useEffect, useState } from 'react';
import Circle from 'src/components/Circle';
import OutputCircles from 'src/components/OutputCircles';
import { Colors, compareValues } from 'src/utils';
import { StyledPanel, TickButton } from 'src/components/panel-styles';
import { AddNewPanelType, ColorType } from 'src/shared-types';

const SinglePanel = ({
  selectedColor,
  patternToGuess,
  active,
  addNewPanel
}: {
  selectedColor: ColorType | null,
  patternToGuess: ColorType[],
  active: boolean,
  addNewPanel: AddNewPanelType
}) => {
  const allUnselected = new Array(4).fill({color: undefined, selected: false});
  const [panelState, setPanelState] = useState(allUnselected);
  const [selectedCircle, setSelectedCircle] = useState<undefined | number>(undefined);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    if (active) {
      let allSelectedFlag = true;
      panelState.forEach(circle => {
        allSelectedFlag = !!circle.color && allSelectedFlag
      });
      setAllSelected(allSelectedFlag);
    }
  }, [panelState, active]);
  
  useEffect(() => {
    if (active && selectedColor && selectedCircle !== undefined) {
      const selectionArr = panelState.map((item, itemIndex) => {
        return {
          selected: item.selected,
          color: itemIndex === selectedCircle ? selectedColor : panelState[itemIndex].color
        };
      });
      setPanelState(selectionArr);
    }
  }, [panelState, selectedCircle, selectedColor, active]);

  const onCircleClick = (index: number) => {
    if (!active) return;
    const selectionArr = panelState.map((item, itemIndex) => {
      return {
        selected: (itemIndex === index),
        color: item.color
      };
    });
    setSelectedCircle(index);
    setPanelState(selectionArr);
  };

  const onTickClick = () => {
    const correctGuess = compareValues({patternToGuess, panelState});
    console.log('correctGuess', correctGuess);
    addNewPanel({panelState, correctGuess});
  };

  return (
    <StyledPanel active={active}>
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
      {allSelected && active && <TickButton onClick={onTickClick}>
        ✓
      </TickButton>}
      <OutputCircles />
    </StyledPanel>
  )
}

export default SinglePanel