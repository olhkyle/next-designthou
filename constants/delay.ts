const delay = async (time: number) => {
	return new Promise(resolve =>
		setTimeout(() => {
			resolve('');
		}, time),
	);
};

export default delay;
