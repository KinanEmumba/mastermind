import { useEffect, useState } from 'react';
import Circle from './Circle';
import OutputCircles from './OutputCircles';
import { ColorType, Colors, compareValues } from '../utils';
import { StyledPanel, TickButton } from './panel-styles';

export type PanelStateObjectType = {
  color: ColorType | undefined,
  selected: boolean
};

const SinglePanel = ({
  selectedColor,
  patternToGuess,
  active,
  addNewPanel
}: {
  selectedColor: ColorType | null,
  patternToGuess: ColorType[],
  active: boolean,
  addNewPanel: ({panelState}: {panelState: PanelStateObjectType[]}) => void;
}) => {
  console.log('active', active);
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
    if (!correctGuess) {
      addNewPanel({panelState});
    } else alert('won!');
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
      {allSelected && <TickButton onClick={onTickClick}>
        ✓
      </TickButton>}
      <OutputCircles />
    </StyledPanel>
  )
}

export default SinglePanel