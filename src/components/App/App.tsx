import { useState } from 'react';

import { SearchForm, OfferList } from '../';
import { Styles } from './';
import { Offer } from '../../models';

export const App = () => {
	const [offers, setOffers] = useState<Offer[]>([]);
	return (
		<Styles.AppWrapper>
			<SearchForm onOffersChange={setOffers} />
			<OfferList offers={offers} />
		</Styles.AppWrapper>
	);
};
