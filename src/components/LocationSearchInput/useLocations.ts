import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { locationService } from '../../services';
import { Location } from '../../models';

export const useLocations = (
	pickUpLocation: string,
	pickUpLocationId: string
) => {
	const [locations, setLocations] = useState<Location[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (pickUpLocationId.length === 0 && pickUpLocation.length !== 0) {
			debouncedGetLocationSuggestions(pickUpLocation);
		}
	}, [pickUpLocation, pickUpLocationId]);

	const getLocationSuggestions = async (locationString: string) => {
		setIsLoading(true);
		const locations = await locationService.searchLocationByName(
			locationString
		);
		setIsLoading(false);
		setLocations(locations);
	};

	const debouncedGetLocationSuggestions = useCallback(
		debounce(getLocationSuggestions, 1000),
		[]
	);

	return { isLoading, locations, setLocations };
};
