import styled from 'styled-components/macro';

const OfferListWrapper = styled.div`
	border: 0px solid black;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 1em;
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
	padding: 3em;
`;
const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10%;
`;
export const Styles = { OfferListWrapper, MessageWrapper };
