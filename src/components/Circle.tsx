import React from 'react';
import styled from 'styled-components';

export type StyledCircleProps = {
  color?: string,
  isSelectable?: boolean,
  isSelected?: boolean,
};

const StyledCircle = styled.div<StyledCircleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 5px;
  background: ${(props) => (props.color || 'black')};
  border: ${(props) => (props.isSelected ? '2px solid black' : 'none')}
`;

const Circle = ({color, isSelected}: StyledCircleProps) => {

  return (
    <StyledCircle color={color} isSelected={isSelected}/>
  )
}

export default Circle