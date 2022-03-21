import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import * as Yup from 'yup';

import useLocation from '../hooks/useLocation';
import Screen from '../components/Screen';
import AppFormContainer from '../components/form/AppFormContainer';
import AppFormField from '../components/form/AppFormField';
import AppFormPicker from '../components/form/AppFormPicker';
import AppFormSubmit from '../components/form/AppFormSubmit';
import AppFormImageListPicker from '../components/form/AppFormImageListPicker';

const ITEMS = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9
	}
];

const initialValues = {
	title: '',
	price: '',
	description: '',
	category: null,
	images: []
};

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(100000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image.')
});

const ListingEditScreen = () => {
	const location = useLocation();
	return (
		<Screen style={styles.container}>
			<KeyboardAvoidingView behavior='padding'>
				<AppFormContainer
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => console.log(values, location)}>
					<AppFormImageListPicker name='images' />
					<AppFormField name='title' placeholder='Title' autoCorrect={false} maxLegth={255} />
					<AppFormField name='price' placeholder='Price' keyboardType='numeric' maxLegth={8} />
					<AppFormPicker name='category' placeholder='Category' items={ITEMS} />
					<AppFormField name='description' placeholder='Description' multiline numberOfLines={3} />
					<AppFormSubmit title='Submit' />
				</AppFormContainer>
			</KeyboardAvoidingView>
		</Screen>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingTop: 40
	}
});
