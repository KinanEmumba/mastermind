import { useEffect, useState } from "react";
import RightPanel from "src/components/RightPanel";
import Logo from "src/components/Logo";
import ShowRules from "src/components/ShowRules";
import SinglePanel from "src/components/SinglePanel";
import { toGuess } from "src/utils";
import { FullContainer, PanelsContainer, StyledLayout } from "src/app/layout-styles";
import { NewPanelData, PanelStateObjectType } from "src/shared-types";
import Turns from "src/components/Turns";
import useColorCircle from "src/components/hooks/useColorCircle";

export type PanelObjectType = {
  panel: undefined | PanelStateObjectType[]
};

export function App() {
  const [turns, setTurns] = useState(5);
  const {clickedColor, setClickedColor} = useColorCircle();
  const [inputPanels, setInputPanels] = useState<PanelObjectType[]>([
    {panel: undefined}
  ]);
  const [patternToGuess, setPatternToGuess] = useState(toGuess());
  console.log('patternToGuess', patternToGuess);
  
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
    <FullContainer>
      <Logo />
      <ShowRules />
      <Turns turns={turns}/>
      <StyledLayout>
        <PanelsContainer>
          {inputPanels.map((pan, index) => {
            return (
              <SinglePanel
                key={index}
                clickedColor={clickedColor}
                setClickedColor={setClickedColor}
                active={index === inputPanels.length-1}
                patternToGuess={patternToGuess}
                addNewPanel={addNewPanel}
              />
            )
          })}
        </PanelsContainer>
        <RightPanel setClickedColor={setClickedColor}/>
      </StyledLayout>
    </FullContainer>
  );
}

export default App;