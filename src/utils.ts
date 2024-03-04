export enum Colors {
  YELLOW = '#ffb400',
  PINK = '#ff5a5e',
  GREEN = '#8ce071',
  TEAL1 = '#04d1c1',
  TEAL2 = '#007a87',
  PURPLE = '#7b0051'
}

export type ColorType = keyof typeof Colors;

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