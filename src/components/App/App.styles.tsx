import styled from 'styled-components/macro';

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 1em;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Styles = {
	AppWrapper,
};
