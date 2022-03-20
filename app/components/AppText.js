import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const AppText = ({ children, style, numberOfLines }) => {
	return (
		<Text numberOfLines={numberOfLines} style={[ styles.text, { ...style } ]}>
			{children}
		</Text>
	);
};

export default AppText;

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
	}
});
