import { useState } from 'react';
import { rules } from 'src/utils';
import styled from 'styled-components';

const ShowRulesContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
`;

const ShowRulesButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0px;
`;

const ShowRules = () => {
  const [rulesVisible, setRulesVisible] = useState(false);
  return (
    <ShowRulesContainer>
      <ShowRulesButton onClick={() => setRulesVisible(prev => !prev)}>
        {`${!rulesVisible ? 'Show' : 'Hide'} rules`}
      </ShowRulesButton>
      {rulesVisible && rules}
    </ShowRulesContainer>
  )
}

export default ShowRules