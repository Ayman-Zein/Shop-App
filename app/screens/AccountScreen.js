import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import CircleIcon from '../components/CircleIcon';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import ItemsSeparator from '../components/ItemsSeparator';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary
		}
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary
		},
		targetScreen: 'Messages'
	}
];

const AccountScreen = ({ navigation }) => {
	return (
		<Screen style={styles.accountScreen}>
			<View style={styles.accountSec}>
				<ListItem title='Ayman Zein' subTitle='ayman@gmail.com' image={require('../assets/mosh.jpg')} />
			</View>
			<View>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ItemsSeparator}
					renderItem={({ item }) => (
						<ListItem
							onPress={() => {
								item.targetScreen && navigation.navigate(item.targetScreen);
							}}
							title={item.title}
							ComponentIcon={
								<CircleIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
							}
						/>
					)}
				/>
			</View>
			<View style={styles.accountSec}>
				<ListItem title='Log Out' ComponentIcon={<CircleIcon name='logout' backgroundColor='#ffe66d' />} />
			</View>
		</Screen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	accountScreen: {
		backgroundColor: colors.light
	},
	accountSec: {
		marginVertical: 15
	}
});
