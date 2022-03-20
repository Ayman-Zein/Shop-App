import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

const AppErrorMessage = ({ error, visible }) => {
	if (!error || !visible) return null;
	return <AppText style={styles.error}>{error}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
	error: {
		color: colors.danger,
		marginBottom: 10
	}
});
