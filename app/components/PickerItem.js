import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const PickerItem = ({ label, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text>{label}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PickerItem;

const styles = StyleSheet.create({
	container: {
		padding: 15
	}
});
