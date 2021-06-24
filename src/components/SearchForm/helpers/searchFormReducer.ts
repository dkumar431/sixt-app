import { SearchFormFields, SearchFormActionTypes, SearchFormActions } from '..';

export const initialSearchFormState: SearchFormFields = {
	pickUpLocationPlaceId: '',
	pickUpLocation: '',
	pickUpDateTime: '',
	duration: '',
};

export const searchFormReducer = (
	state: SearchFormFields,
	action: SearchFormActions
) => {
	switch (action.type) {
		case SearchFormActionTypes.HANDLE_INPUT_CHANGE:
			return {
				...state,
				[action.field]: action.payload,
			};
		case SearchFormActionTypes.HANDLE_LOCATION_CHANGE:
			return {
				...state,
				pickUpLocationPlaceId: action.payload.pickUpLocationPlaceId,
				pickUpLocation: action.payload.pickUpLocation,
			};
		case SearchFormActionTypes.RESET_TEXT_INPUT:
			return {
				...state,
				...initialSearchFormState,
			};
		default:
			return state;
	}
};
