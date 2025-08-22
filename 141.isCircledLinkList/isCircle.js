function isCircle (head) {

  let cur = head;
  const seen = new Set();

  while (cur) {
    if (seen.has(cur)) return true;

    seen.add(cur);
    cur = cur.next;
  }

  return false;
}