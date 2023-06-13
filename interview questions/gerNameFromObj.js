/* eslint-disable */

const users = [
	{ id: 1, name: "John", email: "john@example.com", isActive: true, age: 80 },
	{ id: 2, name: "tom", email: "tom@example", isActive: true, age: 26 },
	{ id: 3, name: "Lee", email: "lee@example.com", isActive: false, age: 35 },
	{ id: 4, name: "Andrew", email: "andrew@gmail.com", isActive: true, age: 17 },
];

const getNameFromArray = (arr) => {
	const res = [];

	return arr
		.sort((user1, user2) => {
			return user1.age - user2.age;
		})
		.filter((user) => user.isActive)
		.map((user) => user.name);
};

console.log(getNameFromArray(users));
