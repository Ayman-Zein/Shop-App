import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<TouchableOpacity style={styles.close}>
					<AntDesign name='close' size={30} color='white' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.delete}>
					<AntDesign name='delete' size={30} color='white' />
				</TouchableOpacity>
			</View>
			<Image style={styles.image} source={require('../assets/chair.jpg')} resizeMode='contain' />
		</View>
	);
};

export default ViewImageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnContainer: {
		position: 'absolute',
		top: 50,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	close: { marginLeft: 20 },
	delete: { marginRight: 20 },
	image: {
		height: '75%'
	}
});
