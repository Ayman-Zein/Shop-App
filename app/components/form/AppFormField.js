import React from 'react';
import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput from '../AppTextInput';

const AppFormField = ({ name, ...otherProps }) => {
	const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
	return (
		<React.Fragment>
			<AppTextInput onChangeText={handleChange(name)} onBlur={() => setFieldTouched(name)} {...otherProps} />
			<AppErrorMessage visible={touched[name]} error={errors[name]} />
		</React.Fragment>
	);
};

export default AppFormField;
