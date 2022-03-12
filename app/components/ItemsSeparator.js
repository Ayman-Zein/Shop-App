import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const ItemsSeparator = () => {
	return <View style={styles.separator} />;
};

export default ItemsSeparator;

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: colors.light
	}
});
