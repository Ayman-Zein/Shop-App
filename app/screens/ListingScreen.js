import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
	{
		id: 1,
		title: 'Red jacket for sale',
		price: 100,
		image: require('../assets/jacket.jpg')
	},
	{
		id: 2,
		title: 'Couch in great condition',
		price: 1000,
		image: require('../assets/couch.jpg')
	}
];

const ListingScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<FlatList
					data={listings}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<AppCard
							title={item.title}
							subTitle={`$ ${item.price} `}
							image={item.image}
							onPress={() => navigation.navigate('ListDetails', item)}
						/>
					)}
				/>
			</View>
		</Screen>
	);
};

export default ListingScreen;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light
	},
	container: {
		padding: 20
	}
});
