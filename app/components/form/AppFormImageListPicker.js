import React from 'react';
import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppImagePickerList from '../AppImagePickerList';

const AppFormImageListPicker = ({ name }) => {
	const { setFieldValue, values, touched, errors } = useFormikContext();
	const imagesUris = values[name];
	return (
		<React.Fragment>
			{/* name,setFieldValue( values[name].filter(imgUri=>imgUri !== uri)) */}
			<AppImagePickerList
				imageUris={imagesUris}
				onAddImage={(uri) => setFieldValue(name, [ ...imagesUris, uri ])}
				onDeleteImage={(uri) => setFieldValue(name, imagesUris.filter((imgUri) => imgUri !== uri))}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

export default AppFormImageListPicker;
