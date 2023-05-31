import React, { useCallback, useEffect, useState } from 'react';
import CurrencyInput, {
	CurrencyValue,
} from '@root/app/forms/CurrencyInput';
import SelectInput from '@root/app/forms/SelectInput';
import utils from '@root/app/utils';
import data from '@root/app/data';

const ProLaborPage: React.FC = () => {
	const defaultCurrency = {
		number: 0,
		string: '',
	};

	const [calcType, setCalcType] = useState<string>('estimate');
	const [estimate, setEstimate] =
		useState<CurrencyValue>(defaultCurrency);
	const [proLabor, setProLabor] =
		useState<CurrencyValue>(defaultCurrency);
	const [inss, setInss] = useState<CurrencyValue>(defaultCurrency);
	const [darf, setDarf] = useState<CurrencyValue>(defaultCurrency);
	const [darfPerc, setDarfPerc] = useState<number>(0);

	const [liquidProLabor, setLiquidProLabor] =
		useState<CurrencyValue>(defaultCurrency);

	const updateProLabor = useCallback(() => {
		const number = estimate.number * 0.28;
		setProLabor({
			number,
			string: utils.formatAsPrice(number),
		});
	}, [estimate]);

	const updateTaxes = useCallback(() => {
		const ninss = proLabor.number * 0.11;
		const [ndarf, pdarf] = utils.darfCalculation(proLabor.number, ninss);
		const nprol = proLabor.number - ninss - ndarf;

		setInss({
			number: ninss,
			string: utils.formatAsPrice(ninss),
		});

		setDarf({
			number: ndarf,
			string: utils.formatAsPrice(ndarf),
		});

		setDarfPerc(pdarf);

		setLiquidProLabor({
			number: nprol,
			string: utils.formatAsPrice(nprol),
		});
	}, [proLabor]);

	useEffect(() => {
		if (estimate.string.length > 0) {
			updateProLabor();
		}
	}, [calcType, estimate.string.length, updateProLabor]);

	useEffect(() => {
		updateProLabor();
	}, [estimate, updateProLabor]);

	useEffect(() => {
		updateTaxes();
	}, [proLabor, updateTaxes]);

	return (
		<div className="wrapper">
			<h2>Calculadora de Pró-labore Líquido</h2>
			<div className="flex-row">
				<div className="flex-col-lg-3">
					<SelectInput
						value={calcType}
						label="Tipo de Cálculo"
						name="calc-type"
						options={data.prolabCalcTypes}
						callback={setCalcType}
					/>
					{calcType === 'estimate' && (
						<CurrencyInput
							value={estimate.string}
							label="Faturamento Estimado"
							tag="R$"
							name="estimate"
							step={0.01}
							callback={setEstimate}
						/>
					)}
					<CurrencyInput
						value={proLabor.string}
						label="Pró-labore Bruto"
						tag="R$"
						name="pro-labore"
						step={0.01}
						readonly={calcType === 'estimate'}
						callback={setProLabor}
					/>
				</div>

				<div className="flex-col-lg-3">
					<CurrencyInput
						value={inss.string}
						label="INSS"
						tag="R$"
						name="inss"
						step={0.01}
						readonly={true}
						callback={setInss}
					/>
					<CurrencyInput
						value={darf.string}
						label={`DARF (${(darfPerc * 100).toFixed(2)}%)`}
						tag="R$"
						name="darf"
						step={0.01}
						readonly={true}
						callback={setDarf}
					/>
					<CurrencyInput
						value={liquidProLabor.string}
						label="Pró-labore Líquido"
						tag="R$"
						name="pro-labore-liquido"
						step={0.01}
						readonly={true}
						callback={setLiquidProLabor}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProLaborPage;
