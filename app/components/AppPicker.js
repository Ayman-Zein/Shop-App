import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Modal, View, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, placeholder, items, selectedItem, onSelect }) => {
	const [ modalVisible, setModalVisible ] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.medium} />}
					<AppText style={styles.text}>{selectedItem.label || placeholder}</AppText>
					<MaterialCommunityIcons style={styles.icon} name='chevron-down' size={20} color={colors.medium} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Screen>
					<Button title='close' onPress={() => setModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelect(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		flexDirection: 'row',
		padding: 15,
		borderRadius: 25,
		alignItems: 'center',
		width: '100%'
	},
	text: { flex: 1, color: colors.dark },
	icon: {
		marginRight: 10
	},
	textInput: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		color: colors.dark
	}
});
