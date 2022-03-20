import React from 'react';
import { Formik } from 'formik';

const AppFormContainer = ({ children, initialValues, validationSchema, onSubmit }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{() => <React.Fragment>{children}</React.Fragment>}
		</Formik>
	);
};

export default AppFormContainer;
