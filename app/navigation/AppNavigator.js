import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import NewListingBtn from './NewListingBtn';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Feed'
				component={FeedNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={25} />
				}}
			/>
			<Tab.Screen
				name='ListingEdit'
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => <NewListingBtn onPress={() => navigation.navigate('ListingEdit')} />,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='plus-circle' color={color} size={size} />
					)
				})}
			/>
			<Tab.Screen
				name='Profile'
				component={AccountNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={25} />
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
