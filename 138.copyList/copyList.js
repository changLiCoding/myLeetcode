function copyList (head) {

  let cur = head;
  const mapCopy = new Map();
  mapCopy.set(null, null);

  while (cur) {
    mapCopy.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const node = mapCopy.get(cur);
    const next = cur.next;
    const random = cur.random;

    node.next = mapCopy.get(next);
    node.random = mapCopy.get(random);

    cur = cur.next;
  }

  return mapCopy.get(head);
}