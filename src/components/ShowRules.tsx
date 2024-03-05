import { useState } from 'react';
import { rules } from 'src/utils';
import styled from 'styled-components';

const ShowRulesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const ShowRulesInnerContainer = styled.div`
  display: flex;
  width: 50vh;
  flex-direction: column;
`;

const ShowRulesButton = styled.div`
  cursoir: pointer;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0px;
`;

const ShowRules = () => {
  const [rulesVisible, setRulesVisible] = useState(false);
  return (
    <ShowRulesContainer>
      <ShowRulesInnerContainer>
        <ShowRulesButton onClick={() => setRulesVisible(prev => !prev)}>
          {!rulesVisible ? 'Show' : 'Hide'}
          {' rules'}
        </ShowRulesButton>
        {rulesVisible && rules}
      </ShowRulesInnerContainer>
    </ShowRulesContainer>
  )
}

export default ShowRules