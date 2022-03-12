import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const WelcomeScreen = () => {
	return (
		<ImageBackground blurRadius={3} style={styles.imgeBackground} source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />
				<Text style={styles.slugan}>Sell What You Don't Want</Text>
			</View>
			<View style={styles.btnContainer}>
				<AppButton title='Login' />
				<AppButton title='Register' color='secondary' />
			</View>
		</ImageBackground>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	imgeBackground: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	logoContainer: {
		alignItems: 'center',
		position: 'absolute',
		top: 100
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 10
	},
	slugan: {
		fontWeight: '500',
		fontSize: 20,
		color: colors.black,
		textTransform: 'uppercase'
	},
	btnContainer: {
		width: '100%',
		padding: 20
	}
});
