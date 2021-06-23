import { OfferRequest, Location, Offer } from '../models';
import { axiosInstance, restEndPoints } from './RestEndPoints';

export class LocationService {
	public async searchLocationByName(searchTerm: string): Promise<Location[]> {
		let locations: Array<Location> = [];
		try {
			const response = await axiosInstance.get<Location[]>(
				`${restEndPoints.location}?searchString=${searchTerm}`
			);
			locations = response.data;
		} catch (error) {
			console.error(error);
		}

		return locations;
	}
	public async getOffersByLocationId(offerRequestPayload: OfferRequest) {
		let offers: Array<Offer> = [];
		try {
			const response = await axiosInstance.post<Offer[]>(
				restEndPoints.offer,
				offerRequestPayload
			);
			offers = response.data;
		} catch (error) {
			console.error(error);
		}
		return offers;
	}
}
