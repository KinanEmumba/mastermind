import { Dispatch, SetStateAction } from "react";
import { Colors } from "src/utils";

export type ColorType = keyof typeof Colors;
export type SetColorType = Dispatch<SetStateAction<string | ColorType>>;

export type PanelStateObjectType = {
  color: ColorType | undefined,
  selected: boolean
};

export type StyledCircleProps = {
  color?: string,
  isSelectable?: boolean,
  isSelected?: boolean | string,
  onClick?: () => void
};

export type NewPanelData = {correctGuess: boolean, panelState: PanelStateObjectType[]};
export type AddNewPanelType = ({correctGuess, panelState} : NewPanelData) => void