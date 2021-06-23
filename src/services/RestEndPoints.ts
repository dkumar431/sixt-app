import axios from 'axios';

const baseUrl = 'https://www.mydriver.com';
export const axiosInstance = axios.create({
	baseURL: baseUrl,
});

export const restEndPoints = {
	location: '/api/v5/locations/autocomplete',
	offer: '/api/v5/offers',
};
