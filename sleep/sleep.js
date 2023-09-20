const sleep = (millis) => {
	const res = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(millis);
		}, millis);
	});

	return res;
};
