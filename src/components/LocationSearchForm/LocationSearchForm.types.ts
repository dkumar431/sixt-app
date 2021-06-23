import { Offer } from '../../models';
export interface LocationSearchFormProps {
	onOffersChange: React.Dispatch<React.SetStateAction<Offer[]>>;
}
