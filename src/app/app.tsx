import { useEffect, useState } from "react";
import RightPanel from "src/components/RightPanel";
import Logo from "src/components/Logo";
import ShowRules from "src/components/ShowRules";
import SinglePanel from "src/components/SinglePanel";
import { toGuess } from "src/utils";
import { PanelsContainer, StyledLayout } from "src/app/layout-styles";
import { ColorType, PanelStateObjectType } from "src/shared-types";

export type PanelObjectType = {
  panel: undefined | PanelStateObjectType[]
};

export function App() {
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [inputPanels, setInputPanels] = useState<PanelObjectType[]>([
    {panel: undefined}
  ]);
  const [patternToGuess] = useState(toGuess());
  console.log('patternToGuess', patternToGuess);

  useEffect(() => {
    if (selectedColor) {
      setSelectedColor(null);
    }
  },[selectedColor]);

  const onRightCircleClick = (color: ColorType) => {
    setSelectedColor(color)
  };

  const addNewPanel = ({panelState}: {panelState: PanelStateObjectType[]}) => {
    const panelsArr = [...inputPanels];
    panelsArr[inputPanels.length-1].panel = panelState;
    panelsArr.push({panel: undefined});
    setInputPanels(panelsArr)
  }

  return (
    <>
      <Logo />
      <ShowRules />
      <StyledLayout>
        <PanelsContainer>
          {inputPanels.map((pan, index) => {
            return (
              <SinglePanel
                key={index}
                active={index === inputPanels.length-1}
                selectedColor={selectedColor}
                patternToGuess={patternToGuess}
                addNewPanel={addNewPanel}
              />
            )
          })}
        </PanelsContainer>
        <RightPanel onRightCircleClick={onRightCircleClick}/>
      </StyledLayout>
    </>
  );
}

export default App;
