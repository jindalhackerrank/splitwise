import React from 'react';
import { getBalance } from './utils';
import './App.css';

function Balances({ data, onSettle = () => {} }) {
	return (
		<ul>
			{(() =>
				Object.keys(data).map((value) => {
					let balances = getBalance(data[value].transactions);
					return (
						<li key={value} className="balance-row">
							<div className="balance-top-row">
								<div className="ib">{data[value].name}</div>
								<div className="ib">{balances.balance}</div>
							</div>

							<div className="balance-bottom-row">
								{Object.keys(balances.groupData).map((key) => (
									<div key={key} className="ib settler">
										<div className="ib">{data[key].name}</div>
										<div className="ib">{balances.groupData[key]}</div>
										<button
											className="ib"
											onClick={() => onSettle(value, key, balances.groupData[key])}
										>
											Settle
										</button>
									</div>
								))}
							</div>
						</li>
					);
				}))()}
		</ul>
	);
}

export default Balances;
