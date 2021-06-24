import { Location } from '../../models';

export interface LocationSearchInputProps {
	pickUpLocation: string;
	onPickUpLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onPickUpLocationSelect: (payload: Object) => void;
	pickUpLocationId: string;
}

export interface LocationListProps {
	isLoading: boolean;
	locations: Array<Location>;
	onPickUpLocationSelect: (payload: Object) => void;
}
