import { useState } from 'react';

import { SearchForm, OfferList } from '../';
import { Styles } from './';
import { Offer } from '../../models';

export const App = () => {
	const [offers, setOffers] = useState<Offer[] | null>(null);
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
	return (
		<Styles.AppWrapper>
			<SearchForm
				onOffersChange={setOffers}
				onLoading={setLoading}
				onError={setError}
			/>
			<OfferList offers={offers} isLoading={isLoading} isError={isError} />
		</Styles.AppWrapper>
	);
};
