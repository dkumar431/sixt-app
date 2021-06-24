import { Offer } from '../../models';
export interface OfferListProps {
	offers: Offer[] | null;
	isLoading: boolean;
	isError: boolean;
}
