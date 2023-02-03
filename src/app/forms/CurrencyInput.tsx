import React from 'react';
import utils from '../utils';

export type CurrencyValue = { number: number; string: string };

export type CurrencyInputProps = {
	value?: string;
	tabIndex?: number;
	required?: boolean;
	readonly?: boolean;
	step?: number;
	label: string;
	tag: string;
	name: string;
	callback: React.Dispatch<
		React.SetStateAction<{ number: number; string: string }>
	>;
};

const CurrencyInput: React.FC<CurrencyInputProps> = props => {
	const {
		value = '',
		tabIndex = 0,
		required = true,
		readonly = false,
		step = 1,
		label,
		tag,
		name,
		callback,
	} = props;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length >= 15) {
			event.preventDefault();
			return;
		}

		const number = utils.formatAsHundredth(event.target.value);

		callback({
			number,
			string: utils.formatAsPrice(number),
		});
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { key } = event;

		if (!['ArrowUp', 'ArrowDown'].includes(key)) {
			return;
		}

		event.preventDefault();

		const number = utils.formatAsHundredth(event.currentTarget.value);

		switch (key) {
			case 'ArrowUp':
				callback({
					number: number + 0.01,
					string: utils.formatAsPrice(number + 0.01),
				});
				break;
			case 'ArrowDown':
				callback({
					number: number - 0.01,
					string: utils.formatAsPrice(number - 0.01),
				});
				break;
			default:
		}
	};

	return (
		<fieldset>
			<label htmlFor={name}>{label}</label>
			<input
				className="currency-input"
				data-testid="currency-input"
				type="text"
				id={name}
				required={required}
				readOnly={readonly}
				tabIndex={tabIndex}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				data-tag={tag}
				step={step}
			/>
		</fieldset>
	);
};

export default CurrencyInput;
