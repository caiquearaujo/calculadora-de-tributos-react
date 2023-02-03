import React from 'react';

export type SelectInputProps = {
	value?: string;
	tabIndex?: number;
	required?: boolean;
	label: string;
	name: string;
	options: Array<{ value: string; label: string }>;
	callback: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput: React.FC<SelectInputProps> = props => {
	const {
		value = '',
		tabIndex = 0,
		required = true,
		label,
		name,
		options,
		callback,
	} = props;

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		callback(event.target.value);
	};

	const renderOptions = () =>
		options.map((option, index) => (
			<option key={index} value={option.value}>
				{option.label}
			</option>
		));

	return (
		<fieldset>
			<label htmlFor={name}>{label}</label>
			<select
				className="currency-input"
				data-testid="currency-input"
				id={name}
				required={required}
				tabIndex={tabIndex}
				value={value}
				onChange={onChange}>
				{renderOptions()}
			</select>
		</fieldset>
	);
};

export default SelectInput;
