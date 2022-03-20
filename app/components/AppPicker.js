import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal, View, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
import AppTextInput from './AppTextInput';

const AppPicker = ({ icon, placeholder, items, selectedItem, onSelect }) => {
	const [ modalVisible, setModalVisible ] = useState(false);
	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={colors.medium} />}
					{selectedItem && selectedItem.label ? (
						<AppText style={styles.itemText}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.text}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons style={styles.icon} name='chevron-down' size={20} color={colors.medium} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Screen>
					<TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
						<AppText style={{ color: colors.medium }}>Close</AppText>
					</TouchableOpacity>
					<FlatList
						numColumns={3}
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								item={item}
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
		width: '100%',
		marginBottom: 15
	},
	text: { flex: 1, color: colors.medium },
	itemText: { color: colors.dark },
	icon: {
		marginRight: 10
	},
	textInput: {
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		color: colors.dark
	},
	close: {
		alignItems: 'center'
	}
});
