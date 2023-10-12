// const sleep = (millis) => {
// 	const res = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(millis);
// 		}, millis);
// 	});

// 	return res;
// };

// const customSleep = (millis) => {
// 	const promise = new Promise((resolve, reject) => {
// 		if (resolve) {
// 			setTimeout(() => {
// 				console.log("time up");
// 			}, millis);
// 			return `${millis} milliseconds up`;
// 		} else if (reject) {
// 			console.log("something wrong");
// 		}
// 	});
// 	return promise;
// };

const customSleep = (millis) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("TIme is up");
			resolve(`${millis} milliseconds up`);
		}, millis);
	});
	return promise;
};

const sleepPromise = customSleep(5000);
sleepPromise.then((data) => {
	console.log(data);
});

async function myFunction() {
	const data = await sleepPromise;
	console.log(data);
}

myFunction();
