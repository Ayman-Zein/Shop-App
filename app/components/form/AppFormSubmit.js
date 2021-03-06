import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

const AppFormSubmit = ({ title, ...otherProps }) => {
	const { handleSubmit } = useFormikContext();
	return <AppButton title={title} {...otherProps} onPress={handleSubmit} />;
};

export default AppFormSubmit;
