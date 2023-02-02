import React from 'react';

export type RegularInputProps = {
	value?: string;
	tabIndex?: number;
	required?: boolean;
	label: string;
	tag: string;
	name: string;
	onUpdateValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RegularInput: React.FC<RegularInputProps> = props => {
	const {
		value = '',
		tabIndex = 0,
		required = true,
		label,
		tag,
		name,
		onUpdateValue,
	} = props;

	return (
		<fieldset>
			<label htmlFor={name}>{label}</label>
			<input
				data-testid="regular-input"
				type="number"
				id={name}
				required={required}
				tabIndex={tabIndex}
				value={value}
				onChange={onUpdateValue}
				onBlur={onUpdateValue}
				data-tag={tag}
			/>
		</fieldset>
	);
};

export default RegularInput;
