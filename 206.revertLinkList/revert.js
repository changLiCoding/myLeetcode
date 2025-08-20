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

function recursion (header) {
  if (!header) return null;
  const newHeader = header;

  if (header.next) {
    newHeader = this.recursion(header.next);
    header.next.next = header
  }
  header.next = null;
  return newHeader;
}