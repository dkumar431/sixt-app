import { useReducer } from 'react';
import { SearchFormProps, Styles, SearchFormActionTypes } from '.';
import { LocationSearchInput } from '..';
import { OfferRequest } from '../../models';
import { locationService } from '../../services';
import {
	initialSearchFormState,
	searchFormReducer,
} from './helpers/searchFormReducer';

export const SearchForm: React.FC<SearchFormProps> = ({
	onOffersChange,
	onLoading,
	onError,
}) => {
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

	const searchOffers = () => {
		onLoading(true);
		const offerRequestPayload: OfferRequest = {
			originPlaceId: formState.pickUpLocationPlaceId,
			selectedStartDate: formState.pickUpDateTime,
			duration: formState.duration,
			type: 'DURATION',
		};
		locationService
			.getOffersByLocationId(offerRequestPayload)
			.then(offers => {
				console.log('offers', offers);
				onOffersChange(offers);
				onLoading(false);
			})
			.catch(error => {
				onLoading(false);
				onError(true);
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
			<Styles.SubmitButton onClick={searchOffers}>Search</Styles.SubmitButton>
		</Styles.SearchFormWrapper>
	);
};
