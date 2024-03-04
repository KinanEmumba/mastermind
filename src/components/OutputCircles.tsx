import styled from 'styled-components';

const StyledOutputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-self: flex-end;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	max-width: 60px;
	height: 60px;
`;

const StyledOutputCircle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 20px;
	border: 1px solid black;
`;

const OutputCircles = () => {
	return (
		<StyledOutputContainer>
			<StyledOutputCircle />
			<StyledOutputCircle />
			<StyledOutputCircle />
			<StyledOutputCircle />
		</StyledOutputContainer>
	)
}

export default OutputCircles