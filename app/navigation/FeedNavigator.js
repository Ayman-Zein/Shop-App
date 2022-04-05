import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Listing' component={ListingScreen} options={{ headerShown: false }} />
			<Stack.Screen name='ListDetails' component={ListDetailsScreen} options={{ title: 'Details' }} />
		</Stack.Navigator>
	);
};

export default FeedNavigator;
