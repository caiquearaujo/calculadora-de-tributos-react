import React, { useCallback, useEffect, useState } from 'react';
import CurrencyInput, {
	CurrencyValue,
} from '@root/app/forms/CurrencyInput';
import utils from '@root/app/utils';

const DASPage: React.FC = () => {
	const defaultCurrency = {
		number: 0,
		string: '0,00',
	};

	const [revenue, setRevenue] = useState<CurrencyValue>(defaultCurrency);
	const [percent, setPercent] = useState<CurrencyValue>(defaultCurrency);
	const [das, setDas] = useState<CurrencyValue>(defaultCurrency);

	const updateDas = useCallback(() => {
		const number = revenue.number * (percent.number / 100);
		setDas({
			number,
			string: utils.formatAsPrice(number),
		});
	}, [revenue, percent]);

	useEffect(() => {
		updateDas();
	}, [revenue, percent, updateDas]);

	return (
		<div className="wrapper">
			<h2>Calculadora de Impostos</h2>
			<div className="flex-row">
				<div className="flex-col-lg-3">
					<CurrencyInput
						value={revenue.string}
						label="Faturamento"
						tag="R$"
						name="revenue"
						step={0.01}
						callback={setRevenue}
					/>
					<CurrencyInput
						value={percent.string}
						label="Porcentagem do Imposto"
						tag="%"
						name="percent"
						step={0.1}
						callback={setPercent}
					/>
				</div>

				<div className="flex-col-lg-3">
					<CurrencyInput
						value={das.string}
						label={`DAS`}
						tag="R$"
						name="das"
						step={0.01}
						readonly={true}
						callback={setDas}
					/>
				</div>
			</div>
		</div>
	);
};

export default DASPage;
