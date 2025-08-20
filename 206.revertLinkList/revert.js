function revert (header) {
  let curr = header;
  let prev = null;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr
    curr = temp;
  }

  return prev
}