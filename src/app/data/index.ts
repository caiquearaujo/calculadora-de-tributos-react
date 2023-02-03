export type DarfAliquot = {
	readonly min: number;
	readonly max: number;
	readonly aliquot: number;
	readonly deduction: number;
};

export type DarfTable = Array<DarfAliquot>;

export type Selectable = Array<{ value: string; label: string }>;

const darfTable: DarfTable = [
	{ min: 0, max: 1903.98, aliquot: 0, deduction: 0 },
	{ min: 1903.99, max: 2826.65, aliquot: 0.075, deduction: 142.8 },
	{ min: 2826.66, max: 3751.05, aliquot: 0.15, deduction: 354.8 },
	{ min: 3751.06, max: 4664.68, aliquot: 0.225, deduction: 636.13 },
	{
		min: 4664.69,
		max: Number.MAX_SAFE_INTEGER,
		aliquot: 0.275,
		deduction: 869.36,
	},
];

const prolabCalcTypes: Selectable = [
	{ value: 'estimate', label: 'Faturamento Estimado' },
	{ value: 'prolabore', label: 'Pró-labore Bruto' },
];

export default { darfTable, prolabCalcTypes };
