import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CircleIcon from './CircleIcon';

const PickerItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<CircleIcon name={item.icon} backgroundColor={item.backgroundColor} color={item.color} />
			<Text style={styles.label}>{item.label}</Text>
		</TouchableOpacity>
	);
};

export default PickerItem;

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		paddingHorizontal: 35,
		alignItems: 'center',
		marginBottom: 10,
		width: '33%'
	},
	label: {
		textTransform: 'capitalize',
		textAlign: 'center',
		marginTop: 5
	}
});
