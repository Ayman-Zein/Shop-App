import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, ComponentIcon, onPress, renderRightActions }) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
					<View style={styles.container}>
						{ComponentIcon && ComponentIcon}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.textContainer}>
							{title && <AppText style={styles.title}>{title}</AppText>}
							{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		backgroundColor: colors.white
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	textContainer: {
		marginLeft: 10,
		justifyContent: 'center'
	},
	subTitle: {
		color: colors.medium
	},
	title: {
		fontWeight: '500',
		textTransform: 'capitalize'
	}
});

export default ListItem;
