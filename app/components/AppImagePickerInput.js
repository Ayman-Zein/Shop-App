import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppImagePickerInput = ({ imageUri, onChangeImage }) => {
	const requestCameraPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!granted) {
			alert('you need a permission to use this');
		}
	};

	useEffect(() => {
		requestCameraPermission();
	}, []);

	const selectImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 0.5
		});
		if (!result.cancelled) onChangeImage(result.uri);
	};

	const handlePickerPress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert('Delete', 'Are you sure you want to delete this image?', [
				{ text: 'Yes', onPress: () => onChangeImage(null) },
				{ text: 'No' }
			]);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={handlePickerPress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image style={styles.image} source={{ uri: imageUri }} />
				) : (
					<MaterialCommunityIcons name='camera' size={50} color={colors.medium} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AppImagePickerInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		width: 100,
		height: 100,
		borderRadius: 15,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.light,
		marginBottom: 15
	},
	image: {
		width: '100%',
		height: '100%'
	}
});
