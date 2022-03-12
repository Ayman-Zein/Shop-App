import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CircleIcon = ({ name, size = 50, color = 'white', backgroundColor = 'black' }) => {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor: backgroundColor,
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			<MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
		</View>
	);
};

export default CircleIcon;
