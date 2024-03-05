import styled from "styled-components";

export const ShowTurnsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ShowTurnsInnerContainer = styled.div`
  display: flex;
  width: 50vh;
  flex-direction: column;
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
      <ShowTurnsInnerContainer>
        <ShowTurnsSpan>
          Turns remaining: {turns}
        </ShowTurnsSpan>
      </ShowTurnsInnerContainer>
    </ShowTurnsContainer>
  )
}

export default Turns