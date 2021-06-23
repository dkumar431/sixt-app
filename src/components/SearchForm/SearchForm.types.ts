import { Offer } from '../../models';
export interface SearchFormProps {
	onOffersChange: React.Dispatch<React.SetStateAction<Offer[]>>;
}
