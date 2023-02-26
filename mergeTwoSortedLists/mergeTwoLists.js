const mergeTwoLists = function (list1, list2) {
	let curr1 = list1;
	let isOnList1 = true;
	const stack = [list2];

	while (stack.length) {
		let curr2 = stack.shift();

		if (curr2 === list2) {
			let newNode = new ListNode(list2.val);
			curr1.next = newNode;
			newNode.next = list1.next;
			curr1 = list1.next;
		}
	}
};
