const formatAsPrice = (val: string): string => {
	if (!val) {
		return '0.00';
	}

	const v = val.replace(/\D/g, '');
	const { length } = v;

	switch (length) {
		case 0:
			return '0.00';
		case 1:
			return `0.0${v}`;
		case 2:
			return `0.${v}`;
		default:
			return `${v.substring(0, length - 2)}.${v.substring(length - 2)}`;
	}
};

export default { formatAsPrice };
