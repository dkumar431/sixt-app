import { useState } from 'react';

import { LocationSearchForm, OfferList } from '../';
import { Styles } from './';
import { Offer } from '../../models';

export const App = () => {
	const [offers, setOffers] = useState<Offer[]>([]);
	return (
		<Styles.AppWrapper>
			<LocationSearchForm onOffersChange={setOffers} />
			<OfferList offers={offers} />
		</Styles.AppWrapper>
	);
};
