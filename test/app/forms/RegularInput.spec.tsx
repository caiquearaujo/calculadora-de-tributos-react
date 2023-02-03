import React from 'react';
import { render, screen } from '@testing-library/react';
import RegularInput from '@root/app/forms/CurrencyInput';

describe('forms > RegularInput', () => {
	it('should display component', () => {
		const props = {
			value: 'default_value',
			tabIndex: 10,
			required: false,
			label: 'default_label',
			tag: 'default_tag',
			name: 'default_name',
			onUpdateValue: jest.fn(),
		};
		render(<RegularInput {...props} />);

		const cmp = screen.getByTestId('regular-input');
		expect(cmp).toBeInTheDocument();
		expect(cmp).toHaveAttribute('type', 'number');
		expect(cmp).toHaveAttribute('id', props.name);
		expect(cmp).not.toHaveAttribute('required');
		expect(cmp).toHaveAttribute('tabindex', '10');
		expect(cmp).toHaveAttribute('value', props.value);
		expect(cmp).toHaveAttribute('data-tag', props.tag);
	});
});
