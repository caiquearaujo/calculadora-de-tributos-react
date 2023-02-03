import data from '@root/app/data';

const darfCalculation = (income: number, taxes = 0): [number, number] => {
	const finalIncome = income - taxes;

	const f = data.darfTable.find(
		item => finalIncome >= item.min && finalIncome <= item.max
	);

	if (!f) {
		return [0, 0];
	}

	return [finalIncome * f.aliquot - f.deduction, f.aliquot];
};

const formatAsHundredth = (val: string): number => {
	const v = val.replace(/\D/g, '');

	if (v.length === 0) {
		return 0;
	}

	return parseInt(v, 10) / 100;
};

const formatAsPrice = (val: string | number): string => {
	let parts: string[];

	if (typeof val === 'string') {
		parts = formatAsHundredth(val).toFixed(2).split('.');
	} else {
		parts = val.toFixed(2).split('.');
	}

	return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${parts[1]}`;
};

export default { darfCalculation, formatAsHundredth, formatAsPrice };
