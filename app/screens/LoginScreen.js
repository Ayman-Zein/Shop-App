import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppFormField from '../components/form/AppFormField';
import AppFormSubmit from '../components/form/AppFormSubmit';
import AppFormContainer from '../components/form/AppFormContainer';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(3).label('Password')
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<AppFormContainer
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					textContentType='emailAddress'
					icon='email'
					placeholder='Email'
					name='email'
				/>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					textContentType='password'
					secureTextEntry
					icon='lock'
					placeholder='Password'
					name='password'
				/>
				<AppFormSubmit title='Login' />
			</AppFormContainer>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	}
});
