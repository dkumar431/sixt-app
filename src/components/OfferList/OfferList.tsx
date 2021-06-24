import { OfferListProps, Styles } from './';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoopIcon from '@material-ui/icons/Loop';

export const OfferList: React.FC<OfferListProps> = ({
	offers,
	isLoading,
	isError,
}) => {
	return (
		<>
			{isLoading && (
				<Styles.MessageWrapper>
					<LoopIcon style={{ fontSize: 150 }} />
				</Styles.MessageWrapper>
			)}
			{!isLoading && isError && (
				<Styles.MessageWrapper>
					<Typography gutterBottom variant="h5" component="h2">
						Error occoured while fetching the offers.
					</Typography>
				</Styles.MessageWrapper>
			)}
			{!isLoading && offers && offers.length === 0 && (
				<Styles.MessageWrapper>
					<Typography gutterBottom variant="h5" component="h2">
						No offers found..
					</Typography>
				</Styles.MessageWrapper>
			)}
			<Styles.OfferListWrapper>
				{!isLoading &&
					offers &&
					offers.map(offer => {
						return (
							<Card>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="180"
										image={offer.vehicleType.images.xxhdpi}
										title="Contemplative Reptile"
									/>

									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{offer.vehicleType.title}
										</Typography>
										<Typography gutterBottom variant="h6" component="h2">
											{new Intl.NumberFormat('de-DE', {
												style: 'currency',
												currency: 'EUR',
											}).format(offer.finalAmountGross)}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{offer.vehicleType.description}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										{offer.vehicleType.category}
									</Button>
									<Button size="small" color="primary">
										{offer.vehicleType.class}
									</Button>
									<Button size="small" color="primary">
										Passengers: {offer.vehicleType.nrOfPassengers}
									</Button>
								</CardActions>
							</Card>
						);
					})}
			</Styles.OfferListWrapper>
		</>
	);
};
