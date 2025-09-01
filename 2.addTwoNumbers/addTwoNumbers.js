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
