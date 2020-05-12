export const getBalance = (transactions) => {
	let obj = {};
	obj.balance = transactions.reduce((acc, value) => {
		return acc + value.amount;
	}, 0);

	let groupData = {};

	transactions.map((value) => {
		if (groupData[value.id]!==undefined) {
			groupData[value.id] = groupData[value.id] + value.amount;
		} else {
			groupData[value.id] = value.amount;
		}
	});

	obj.groupData = groupData;

	return obj;
};
