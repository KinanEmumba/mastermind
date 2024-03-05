import styled from "styled-components";

export const ShowTurnsContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const ShowTurnsSpan = styled.span`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0px;
`;

const Turns = ({turns}: {turns: number}) => {
  return (
    <ShowTurnsContainer>
      <ShowTurnsSpan>
        Turns remaining: {turns}
      </ShowTurnsSpan>
    </ShowTurnsContainer>
  )
}

export default Turns