export interface OfferRequest {
	originPlaceId: string;
	selectedStartDate: string;
	duration: string;
	type: string;
}

export interface Offer {
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
}
