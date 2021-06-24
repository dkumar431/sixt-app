import { LocationList, Styles, LocationSearchInputProps } from './';
import { useLocations } from './useLocations';

export const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
	pickUpLocation,
	onPickUpLocationChange,
	onPickUpLocationSelect,
	pickUpLocationId,
}) => {
	const { isLoading, locations, setLocations } = useLocations(
		pickUpLocation,
		pickUpLocationId
	);

	const pickUpLocationSelectHandler = (payload: Object) => {
		onPickUpLocationSelect(payload);
		setLocations([]);
	};

	return (
		<Styles.LocationSearchInputWrapper>
			<Styles.TextInput
				label="Pickup Location"
				name="pickUpLocation"
				value={pickUpLocation}
				onChange={onPickUpLocationChange}
				autoComplete="off"
			/>

			{locations.length > 0 && pickUpLocation.length > 0 && (
				<LocationList
					isLoading={isLoading}
					locations={locations}
					onPickUpLocationSelect={pickUpLocationSelectHandler}
				/>
			)}
		</Styles.LocationSearchInputWrapper>
	);
};
