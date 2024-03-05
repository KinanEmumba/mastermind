import { useEffect, useState } from "react";
import RightPanel from "src/components/RightPanel";
import SinglePanel from "src/components/SinglePanel";
import { ColorType, toGuess } from "src/utils";
import { PanelsContainer, StyledLayout } from "src/app/layout-styles";
import Logo from "src/components/Logo";
import ShowRules from "src/components/ShowRules";

export function App() {
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
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

  return (
    <>
      <Logo />
      <ShowRules />
      <StyledLayout>
        <PanelsContainer>
          <SinglePanel selectedColor={selectedColor}/>
          <SinglePanel selectedColor={selectedColor}/>
          <SinglePanel selectedColor={selectedColor}/>
          <SinglePanel selectedColor={selectedColor}/>
        </PanelsContainer>
        <RightPanel onRightCircleClick={onRightCircleClick}/>
      </StyledLayout>
    </>
  );
}

export default App;
