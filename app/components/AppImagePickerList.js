import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AppImagePickerInput from './AppImagePickerInput';

const AppImagePickerList = ({ imageUris = [], onDeleteImage, onAddImage }) => {
	const scrView = useRef(null);
	return (
		<View>
			<ScrollView
				horizontal
				ref={scrView}
				onContentSizeChange={() => scrView.current.scrollToEnd({ animated: true })}>
				<View style={styles.container}>
					{imageUris.map((imgUri) => (
						<View key={imgUri} style={styles.box}>
							<AppImagePickerInput imageUri={imgUri} onChangeImage={() => onDeleteImage(imgUri)} />
						</View>
					))}
					<AppImagePickerInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
};

export default AppImagePickerList;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	box: {
		marginRight: 10
	}
});
