import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const TextInput = styled(TextField)``;

const LocationList = styled(List)`
	max-height: 300px;
	overflow: scroll;
	box-shadow: 0 10px 30px rgb(41 51 57 / 75%);
	border-radius: 8px;
`;

const LocationListItem = styled(ListItem)``;

const LocationSearchInputWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;
export const Styles = {
	TextInput,
	LocationSearchInputWrapper,
	LocationList,
	LocationListItem,
};
