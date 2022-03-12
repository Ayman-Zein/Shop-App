import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppCard from './app/components/AppCard';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import AccountScreen from './app/screens/AccountScreen';
import ListDetailsScreen from './app/screens/ListDetailsScreen';
import ListingScreen from './app/screens/ListingScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const ITEMS_DATA = [
	{
		label: 'Clothing',
		value: 1
	},
	{
		label: 'Furniture',
		value: 2
	},
	{
		label: 'Cameras',
		value: 3
	},
	{
		label: 'Computers',
		value: 4
	}
];

export default function App() {
	const [ category, setCategory ] = useState({});
	return (
		<Screen>
			<AppTextInput icon='email' placeholder='first name' />
			<AppPicker
				placeholder='category'
				selectedItem={category}
				onSelect={(item) => setCategory(item)}
				items={ITEMS_DATA}
				icon='apps'
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
