export interface OfferRequest {
	originPlaceId: string;
	selectedStartDate: string;
	duration: string;
	type: string;
}

export interface Offer {
	finalAmountGross: number;
	reservationAmounts: {
		finalRidePriceNet: number;
		finalRidePriceGross: number;
	};
	vat: number;
	currency: string;
	cancellationPolicy: {
		id: number;
		name: string;
		rideType: string;
		parameters: {
			additionalProp1: {};
		};
	};
	vehicleTypeId: number;
	vehicleTypeName: string;
	numberOfPassengers: number;
	numberOfBaggage: number;
	voucherCode: string;
	appliedPromotions: [
		{
			promotionHeadline: string;
			promotionUsageMessage: string;
			promotionMarketingMessage: string;
			couponCode: string;
			promotionName: string;
		}
	];
	distance: number;
	duration: number;
	companyId: number;
	reversed: boolean;
	isReturnRideAvailable: boolean;
	estimatedArrivalTime: number;
	offerIdentifier: string;
	onDemand: boolean;
	priceVary: boolean;
	imageType: string;
	fixed: boolean;
	provider: string;
	sixtCustomerNumber: number;
	group: string;
	isPreselected: boolean;
	vehicleType: {
		airportFreeWaitingTime: number;
		benefits: string[];
		brand: string;
		brandTermsAndConditions: null;
		category: string;
		class: string;
		code: string;
		defaultFreeWaitingTime: number;
		description: string;
		id: number;
		imageType: string;
		images: {
			hdpi: string;
			mdpi: string;
			native: string;
			web: string;
			x1: string;
			x2: string;
			x3: string;
			xhdpi: string;
			xxhdpi: string;
		};
		logo: {};
		marketingImages: [];
		milesRedemption: boolean;
		mobileLogo: null;
		name: string;
		nrOfBaggage: number;
		nrOfPassengers: number;
		onDemand: false;
		onDemandCapability: string;
		priceVary: false;
		roamingType: string;
		title: string;
	};
}
