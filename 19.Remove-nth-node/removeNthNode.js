function removeNthNode (head, n) {
  const dummy = {val: 0, next: head};
  let fast = dummy, slow = dummy;

  for (let i = 0; i <= n; i++) {
    if (fast) {
      fast = fast.next
    } else {
      return head;
    }
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next
}