import { Styles, LocationSearchInputProps } from './';

export const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
	pickUpLocation,
	onPickUpLocationChange,
}) => {
	return (
		<Styles.TextInput
			label="Pickup Location"
			name="pickUpLocation"
			value={pickUpLocation}
			onChange={onPickUpLocationChange}
		/>
	);
};
