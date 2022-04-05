import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const NewListingBtn = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name='plus-circle' color={colors.white} size={30} />
			</View>
		</TouchableOpacity>
	);
};

export default NewListingBtn;

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		borderRadius: 40,
		bottom: 30,
		borderWidth: 10,
		borderColor: colors.white,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
