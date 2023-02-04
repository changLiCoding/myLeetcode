const removeElements = (head, val) => {
  if (!head) return [];

  let tempHead = new ListNode(0);
  tempHead.next = head;
  let current = tempHead;
  while (current.next !== null) {
    if (current.next.val === val) {

      current.next = current.next.next;

    } else {
      current = current.next;
    }
  }
  return tempHead.next;
};
