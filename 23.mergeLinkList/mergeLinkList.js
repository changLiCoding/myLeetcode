function mergeLists (lists) {
  const values = [];
  for (let list of lists) {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  }

  const dummy = {val: 0, next: null};
  let cur = dummy;

  values.sort((a, b) => a - b);

  values.forEach((val, index) => {
    const newNode = {val, next: null};
    cur.next = newNode;
    cur = cur.next;
  })

  return dummy.next;
}