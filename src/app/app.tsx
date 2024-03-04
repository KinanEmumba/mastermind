import styled from "styled-components";
import RightPanel from "../components/RightPanel";
import SinglePanel from "../components/SinglePanel";
import { useState } from "react";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: auto;
`;

export function App() {
  const allUnselected = new Array(4).fill({color: undefined, selected: false});
  const [panelState, setPanelState] = useState(allUnselected);
  const [selectedCircle, setSelectedCircle] = useState<undefined | number>(undefined);

  const onCircleClick = (index: number) => {
    const newArr = [...panelState].map((item, itemIndex) => {
      item.selected = (itemIndex === index);
      return item;
    });
    setSelectedCircle(index);
    setPanelState(newArr);
  };

  const onRightCircleClick = (color: string) => {
    if (!selectedCircle) return;
    const newArr = [...panelState];
    const newObj = newArr[selectedCircle];
    newObj.color = color;
    newArr[selectedCircle] = newObj;
    setPanelState(newArr);
  };

  return (
    <StyledLayout>
      <SinglePanel
        onCircleClick={onCircleClick}
        panelState={panelState}
      />
      <RightPanel onRightCircleClick={onRightCircleClick}/>
    </StyledLayout>
  );
}

export default App;
