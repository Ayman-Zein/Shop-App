import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
const useLocation = () => {
	const [ location, setLocation ] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== 'granted') {
					alert('Permission to access location was denied');
					return;
				}

				let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
				console.log(latitude, longitude);
				setLocation({
					latitude,
					longitude
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return location;
};

export default useLocation;
