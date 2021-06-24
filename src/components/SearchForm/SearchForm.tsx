import { useReducer } from 'react';
import { SearchFormProps, Styles, SearchFormActionTypes } from '.';
import { LocationSearchInput } from '..';
import {
	initialSearchFormState,
	searchFormReducer,
} from './helpers/searchFormReducer';

export const SearchForm: React.FC<SearchFormProps> = ({ onOffersChange }) => {
	const [formState, dispatch] = useReducer(
		searchFormReducer,
		initialSearchFormState
	);

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: SearchFormActionTypes.HANDLE_INPUT_CHANGE,
			field: event.target.name,
			payload: event.target.value,
		});
	};

	const locationSelectHandler = (payload: any) => {
		dispatch({
			type: SearchFormActionTypes.HANDLE_LOCATION_CHANGE,
			payload: payload,
		});
	};

	const locationChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const payload = {
			pickUpLocationPlaceId: '',
			pickUpLocation: event.target.value,
		};
		dispatch({
			type: SearchFormActionTypes.HANDLE_LOCATION_CHANGE,
			payload: payload,
		});
	};

	return (
		<Styles.SearchFormWrapper>
			<LocationSearchInput
				pickUpLocation={formState.pickUpLocation}
				pickUpLocationId={formState.pickUpLocationPlaceId}
				onPickUpLocationChange={locationChangeHandler}
				onPickUpLocationSelect={locationSelectHandler}
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
