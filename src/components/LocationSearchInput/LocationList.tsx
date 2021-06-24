import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LoopIcon from '@material-ui/icons/Loop';

import { Styles, LocationListProps } from './';

export const LocationList: React.FC<LocationListProps> = ({
	isLoading,
	locations,
	onPickUpLocationSelect,
}) => {
	return (
		<Styles.LocationList>
			{isLoading && (
				<LoopIcon style={{ padding: '10px 0', marginLeft: '50%' }} />
			)}
			{!isLoading &&
				locations.map(location => {
					return (
						<Styles.LocationListItem
							button={true}
							onClick={event => {
								onPickUpLocationSelect({
									pickUpLocationPlaceId: location.placeId,
									pickUpLocation: location.label,
								});
							}}
						>
							<ListItemIcon>
								<LocationOnIcon />
							</ListItemIcon>
							<ListItemText
								primary={location.label}
								secondary={location.address}
							/>
						</Styles.LocationListItem>
					);
				})}
		</Styles.LocationList>
	);
};
