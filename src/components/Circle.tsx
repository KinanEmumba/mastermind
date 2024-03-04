import styled from 'styled-components';

export type StyledCircleProps = {
  color?: string,
  isSelectable?: boolean,
  isSelected?: boolean | string,
  onClick?: () => void
};

const StyledCircleContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
`;
const StyledCircle = styled.div<StyledCircleProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  background: ${(props) => (props.color || 'transparent')};
  border: ${(props) => (props.isSelected ? '2px solid black' : '1px solid black')}
`;

const Circle = ({color, isSelected, onClick}: StyledCircleProps) => {
  return (
    <StyledCircleContainer>
      <StyledCircle
        color={color}
        isSelected={isSelected}
        onClick={onClick}
      />
    </StyledCircleContainer>
  )
}

export default Circle