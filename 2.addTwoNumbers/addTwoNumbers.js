function addTwoNumbers(l1, l2) {
  let l = l1;
  let r = l2;
  const dummy = new ListNode(0);
  let newHead = dummy;
  let carry = 0;

  while (l || r || carry) {
    const value = (l?.val ?? 0) + (r?.val ?? 0) + carry;
    const newNode = new ListNode(value % 10);
    carry = Math.floor(value / 10);

    newHead.next = newNode;
    newHead = newHead.next;

    l = l?.next ?? null;
    r = r?.next ?? null;
  }

  return dummy.next;
}

function addedList (l1, l2) {
  const dummy = {val: 0, next: null};
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    const value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const newNode = new ListNode(value % 10);

    carry = value > 9 ? 1 : 0;
    cur.next = newNode;
    cur = cur.next;

    l1 = l1 ?? null;
    l2 = l2 ?? null;
  }

  return dummy.next;

}

function addTwoNumber (l1, l2) {
  const dummy = {val: 0, next: null};
  let cur = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const value = carry + (l1?.val ?? 0) + (l2?.val ?? 0)
    carry = Math.floor(value / 10);
    const newNode = {val: value % 10, next: null};

    cur.next = newNode;
    cur = cur.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}