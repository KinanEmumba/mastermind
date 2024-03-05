import { ColorType } from "./shared-types";

export enum Colors {
  YELLOW = '#ffb400',
  PINK = '#ff5a5e',
  GREEN = '#8ce071',
  TEAL1 = '#04d1c1',
  TEAL2 = '#007a87',
  PURPLE = '#7b0051'
}

export const randomColor = () => {
  const rand = Math.floor(Math.random() * Object.keys(Colors).length);
  const randomColorKey = Object.keys(Colors)[rand] as ColorType;
  return randomColorKey;
};

export const toGuess = () => {
  const toGuessArray: ColorType[] = [];
  for (let x=0; x<4; x++) {
    toGuessArray.push(randomColor());
  }
  return toGuessArray;
};

export const compareValues = ({
  patternToGuess,
  panelState
}: {
  patternToGuess: ColorType[],
  panelState: {color: ColorType}[],
}) => {
  const currentColors = panelState.map(obj => obj.color);
  let allSameFlag = true;
  // console.log('patternToGuess', patternToGuess);
  // console.log('currentColors', currentColors);
  currentColors.forEach((col, index) => {
    allSameFlag = col === patternToGuess[index]
  });
  return allSameFlag;
};

export const rules = `Try to guess the pattern, in both order and color, within ten turns.
After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position.
A white peg indicates the existence of a correct color code peg placed in the wrong position.
And a cross represents the wrong color code.`;