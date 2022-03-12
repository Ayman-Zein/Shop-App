import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItemDelete = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.deleteBox}>
				<AntDesign name='delete' size={30} color='white' />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListItemDelete;

const styles = StyleSheet.create({
	deleteBox: {
		backgroundColor: colors.danger,
		width: 60,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
