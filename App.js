import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import appTheme from './app/navigation/appTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
	return (
		<NavigationContainer theme={appTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
