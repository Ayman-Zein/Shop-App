import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}
			<TextInput {...otherProps} style={styles.textInput} placeholderTextColor={colors.medium} />
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		flexDirection: 'row',
		padding: 15,
		borderRadius: 25,
		alignItems: 'center',
		width: '100%',
		marginBottom: 15
	},
	icon: {
		marginRight: 10
	},
	textInput: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		color: colors.dark
	}
});
