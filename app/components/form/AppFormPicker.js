import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

const AppFormPicker = ({ name, placeholder, items }) => {
	const { setFieldValue, values, touched, errors } = useFormikContext();

	return (
		<React.Fragment>
			<AppPicker
				icon='apps'
				items={items}
				placeholder={placeholder}
				onSelect={(item) => setFieldValue(name, item)}
				selectedItem={values[name]}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

export default AppFormPicker;
