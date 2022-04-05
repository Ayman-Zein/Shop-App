import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/form/AppFormField';
import AppFormSubmit from '../components/form/AppFormSubmit';
import AppFormContainer from '../components/form/AppFormContainer';

const validationSchema = Yup.object().shape({
	userName: Yup.string().required().label('User Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(3).label('Password')
});

const RegisterScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo-red.png')} />
			<AppFormContainer
				initialValues={{ userName: '', email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}>
				<AppFormField
					autoCapitalize='none'
					autoCorrect={false}
					icon='account'
					placeholder='User Name'
					name='userName'
				/>
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
				<AppFormSubmit title='Register' />
			</AppFormContainer>
		</Screen>
	);
};

export default RegisterScreen;

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
