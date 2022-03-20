import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const AppButton = ({ title, color = 'primary', onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[ styles.btn, { backgroundColor: colors[color] } ]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		width: '100%',
		marginVertical: 10
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
});
