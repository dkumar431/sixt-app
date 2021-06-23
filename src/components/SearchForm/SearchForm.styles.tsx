import styled from 'styled-components/macro';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchFormWrapper = styled.div`
	padding-top: 1em;
	display: grid;
	grid-template-columns: 2fr 1.5fr 1fr 1fr;
	grid-gap: 2em;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	margin: 0em 1em;
`;

const TextInput = styled(TextField)``;

const SubmitButton = styled(Button)`
	display: flex !important;
	margin: auto !important;
	background-color: #ff5f00 !important;
	&:hover {
		background-color: #ff0000 !important;
	}
	color: white !important;
	border-radius: 0px !important;
	width: 100%;
`;

export const Styles = { SearchFormWrapper, TextInput, SubmitButton };
