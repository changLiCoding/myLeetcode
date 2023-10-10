/* eslint-disable */

const users = [
	{ id: 1, name: "John", email: "john@example.com", isActive: true, age: 80 },
	{ id: 2, name: "tom", email: "tom@example", isActive: true, age: 26 },
	{ id: 3, name: "Lee", email: "lee@example.com", isActive: false, age: 35 },
	{ id: 4, name: "Andrew", email: "andrew@gmail.com", isActive: true, age: 17 },
];

// const checkNameExisted = (arr, name) => {
// 	return arr.filter((user) => user.isActive).some((user) => user.name === name);
// };

// const check2 = (arr, name) => {
// 	return Boolean(
// 		arr.filter((user) => user.isActive).find((user) => user.name === name)
// 	);
// };

// console.log(checkNameExisted(users, "tom"));

// const checkNameExistedCaseinsensitive = (objArr, name) => {
// 	let res = false;

// 	for (let obj of objArr) {
// 		console.log(obj.name);
// 		if (obj.name.toLowerCase() === name) {
// 			res = true;
// 			break;
// 		}
// 	}

// 	return res;
// };

const checkNameExistedCaseinsensitive = (objects, name) => {
	return objects.some((user) => user.name === name);
};

console.log(checkNameExistedCaseinsensitive(users, "Tom"));
