import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

const ListDetailsScreen = ({ image, price, title }) => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<View style={styles.textContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.price}>{price}</AppText>
			</View>
			<View style={styles.listItemContainer}>
				<ListItem title='mosh hamedanni' subTitle='5 Listing' image={require('../assets/mosh.jpg')} />
			</View>
		</View>
	);
};

export default ListDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white
	},
	image: {
		width: '100%',
		height: 250
	},
	textContainer: {
		padding: 15
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold'
	},
	title: {
		textTransform: 'capitalize',
		marginBottom: 7
	},
	listItemContainer: {
		paddingTop: 50,
		paddingHorizontal: 15
	}
});
