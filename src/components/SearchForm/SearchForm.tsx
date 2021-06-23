import { useReducer } from 'react';
import { SearchFormProps, Styles } from '.';
import { LocationSearchInput } from '..';

export const SearchForm: React.FC<SearchFormProps> = ({ onOffersChange }) => {
	const initialFormState = {
		pickUpLocation: '',
		pickUpDateTime: '',
		duration: '',
	};

	const searchFormReducer = (state: any, action: any) => {
		switch (action.type) {
			case 'HANDLE_INPUT_CHANGE':
				return {
					...state,
					[action.field]: action.payload,
				};
			case 'RESET_TEXT_INPUT':
				return {
					...state,
					...initialFormState,
				};
			default:
				return state;
		}
	};

	const [formState, dispatch] = useReducer(searchFormReducer, initialFormState);

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'HANDLE_INPUT_CHANGE',
			field: event.target.name,
			payload: event.target.value,
		});
	};

	return (
		<Styles.SearchFormWrapper>
			<LocationSearchInput
				pickUpLocation={formState.pickUpLocation}
				onPickUpLocationChange={inputChangeHandler}
			/>
			<Styles.TextInput
				id="datetime-local"
				label="Date & Time"
				type="datetime-local"
				defaultValue="2017-05-24T10:30"
				InputLabelProps={{
					shrink: true,
				}}
				name="pickUpDateTime"
				value={formState.pickUpDateTime}
				onChange={inputChangeHandler}
			/>
			<Styles.TextInput
				label="Duration (Hrs)"
				type="number"
				name="duration"
				value={formState.duration}
				onChange={inputChangeHandler}
			/>
			<Styles.SubmitButton>Search</Styles.SubmitButton>
		</Styles.SearchFormWrapper>
	);
};
