import { Offer } from '../../models';
export interface SearchFormProps {
	onOffersChange: React.Dispatch<React.SetStateAction<Offer[]>>;
}

export interface SearchFormFields {
	pickUpLocationPlaceId: string;
	pickUpLocation: string;
	pickUpDateTime: string;
	duration: string;
}

export enum SearchFormActionTypes {
	HANDLE_INPUT_CHANGE,
	HANDLE_LOCATION_CHANGE,
	RESET_TEXT_INPUT,
}

type ActionHandleInputChange = {
	type: SearchFormActionTypes.HANDLE_INPUT_CHANGE;
	field: string;
	payload: string;
};
type ActionHandleLocationChange = {
	type: SearchFormActionTypes.HANDLE_LOCATION_CHANGE;
	payload: { pickUpLocationPlaceId: string; pickUpLocation: string };
};
type ActionResetTextInput = {
	type: SearchFormActionTypes.RESET_TEXT_INPUT;
};

export type SearchFormActions =
	| ActionHandleInputChange
	| ActionHandleLocationChange
	| ActionResetTextInput;
