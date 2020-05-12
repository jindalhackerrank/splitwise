import React, { useState } from 'react';

import './App.css';

function Expense({ data, onAdd = () => {} }) {
	let [payer, setPayer] = useState(Object.keys(data)[0]);
	let [amount, setAmount] = useState(0);
	return (
		<div className="App">
			<div>Select paid by </div>
			<select defaultValue={payer} onChange={(e) => setPayer(e.target.value)}>
				{Object.keys(data).map((id) => (
					<option key={id} value={id}>
						{data[id].name}
					</option>
				))}
			</select>
			<input value={amount} type="text" placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
			<button onClick={() => onAdd(payer, amount)}>ADD</button>
		</div>
	);
}

export default Expense;
