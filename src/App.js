import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Balances from './Balances';
import Expense from './Expense';

const d = {
	'1': {
		name: 'Ashish',
		transactions: [
			{
				id: 2,
				amount: -20,
			},
		],
	},
	2: {
		name: 'Ankit',
		transactions: [
			{
				id: 1,
				amount: 20,
			},
			{
				id: 3,
				amount: 20,
			},
		],
	},
	3: {
		name: 'Ashu',
		transactions: [
			{
				id: 2,
				amount: -20,
			},
		],
	},
};

function App() {
	const [data, setData] = useState(d);
	return (
		<div className="App">
			<Balances
				data={data}
				onSettle={(id1, id2, amount) => {
					let d = JSON.parse(JSON.stringify(data));
					d[id1].transactions.push({ id: id2, amount: -amount });
					d[id2].transactions.push({ id: id1, amount: amount });
					setData(d);
				}}
			/>
			<Expense
				data={data}
				onAdd={(payerId, amount) => {
					let d = JSON.parse(JSON.stringify(data));
					let ids = Object.keys(d);
					let splitAmount = amount / ids.length;
					ids.map((id) => {
						if (id !== payerId) {
							d[id].transactions.push({ id: payerId, amount: -splitAmount });
							d[payerId].transactions.push({ id: id, amount: splitAmount });
						}
					});
					setData(d);
				}}
			/>
		</div>
	);
}

export default App;
