import React, { createContext, useCallback, useContext } from 'react';

export type FormContextData = {
	onChangeHandler: (
		dispatcher: React.Dispatch<React.SetStateAction<string>>
	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormContext = createContext<FormContextData>({
	onChangeHandler: () => () => {},
});

function FormProvider({ children }: React.PropsWithChildren) {
	const onChangeHandler =
		(dipatcher: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			console.log('onChangeHandler', e.target.value);
			dipatcher(e.target.value);
		};

	const value = {
		onChangeHandler,
	};

	return (
		<FormContext.Provider value={value}>{children}</FormContext.Provider>
	);
}

const useFormContext = () => useContext(FormContext);

export { FormProvider, useFormContext };
export default FormContext;
