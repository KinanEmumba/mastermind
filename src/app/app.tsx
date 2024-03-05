import { useEffect, useState } from "react";
import RightPanel from "src/components/RightPanel";
import Logo from "src/components/Logo";
import ShowRules from "src/components/ShowRules";
import SinglePanel from "src/components/SinglePanel";
import { toGuess } from "src/utils";
import { PanelsContainer, StyledLayout } from "src/app/layout-styles";
import { NewPanelData, ColorType, PanelStateObjectType } from "src/shared-types";
import Turns from "src/components/Turns";

export type PanelObjectType = {
  panel: undefined | PanelStateObjectType[]
};

export function App() {
  const [turns, setTurns] = useState(5); // NUMBER OF TURNS
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [inputPanels, setInputPanels] = useState<PanelObjectType[]>([
    {panel: undefined}
  ]);
  const [patternToGuess, setPatternToGuess] = useState(toGuess());
  console.log('patternToGuess', patternToGuess);

  useEffect(() => {
    if (selectedColor) {
      setSelectedColor(null);
    }
  },[selectedColor]);
  
  useEffect(() => {
    if (!inputPanels.length) {
      setInputPanels([{panel: undefined}]);
    }
  },[inputPanels]);

  const reset = () => {
    setTurns(5);
    setPatternToGuess(toGuess());
    setInputPanels([]);
  };

  const onRightCircleClick = (color: ColorType) => {
    setSelectedColor(color)
  };

  const addNewPanel = ({panelState, correctGuess}: NewPanelData) => {
    if (correctGuess) {
      alert('won!');
      return reset();
    }
    else {
      if (turns > 1) {
        setTurns(prev => prev - 1);
        const panelsArr = [...inputPanels];
        panelsArr[inputPanels.length-1].panel = panelState;
        panelsArr.push({panel: undefined});
        setInputPanels(panelsArr)
      }
      else return alert ('lost!');
    }
  }

  return (
    <>
      <Logo />
      <ShowRules />
      <Turns turns={turns}/>
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

// Layout containers
// Custom hooks instead of multiple props