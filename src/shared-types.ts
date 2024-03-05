import { Colors } from "src/utils";

export type ColorType = keyof typeof Colors;

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