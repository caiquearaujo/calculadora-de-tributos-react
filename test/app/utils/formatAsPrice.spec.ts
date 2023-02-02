import utils from '@root/app/utils';

describe('utils -> formatAsPrice', () => {
	it('should return 0.00 when passed an empty string', () => {
		expect(utils.formatAsPrice('')).toEqual('0.00');
	});

	it('should return 0.00 when passed a string with only non-numeric characters', () => {
		expect(utils.formatAsPrice('abc')).toEqual('0.00');
	});

	it('should return 0.01 when passed a string with only 1', () => {
		expect(utils.formatAsPrice('1')).toEqual('0.01');
	});

	it('should return 0.10 when passed a string with only 10', () => {
		expect(utils.formatAsPrice('10')).toEqual('0.10');
	});

	it('should return 1.00 when passed a string with only 100', () => {
		expect(utils.formatAsPrice('100')).toEqual('1.00');
	});

	it('should return 1.00 when passed a string with only 1000', () => {
		expect(utils.formatAsPrice('1000')).toEqual('10.00');
	});
});
