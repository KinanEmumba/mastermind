import styled from 'styled-components';

export const StyledPanel = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 400px;
  max-height: 100px;
  opacity: ${props => props.active ? '1' : '0.5'};
`;

export const TickButton = styled.div`
  cursor: pointer;
  font-size: 50px;
  font-weight: bold;
  color: darkgreen;
`;
