import styled from "styled-components";
import RightPanel from "../components/RightPanel";
import SinglePanel from "../components/SinglePanel";
import { useEffect, useState } from "react";
import { ColorType, toGuess } from "../utils";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: auto;
`;

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
    <StyledLayout>
      <SinglePanel selectedColor={selectedColor}/>
      <RightPanel onRightCircleClick={onRightCircleClick}/>
    </StyledLayout>
  );
}

export default App;
