import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const AppCard = ({ title, subTitle, image, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Image source={image} style={styles.image} />
				<View style={styles.textContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText numberOfLines={2} style={styles.subTitle}>
						{subTitle}
					</AppText>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default AppCard;

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200
	},
	textContainer: {
		padding: 15
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold'
	},
	title: {
		textTransform: 'capitalize',
		marginBottom: 7
	}
});
