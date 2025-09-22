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

function mergeLinkLists (lists) {
  const vals = [];
  for (let list of lists) {
    while (list) {
      vals.push(list.val)

      list = list.next;
    }
  }

  vals.sort((a, b) => a - b);

  const dummy = {val: 0, next: null};
  let cur = dummy;

  for (let val of vals) {
    const node = {val, next: null};

    cur.next = node;
    cur = cur.next;
  }
  return dummy.next;

}

function merge (list1, list2) {
  const dummy = {val: 0, next: null}
  let cur = dummy;

  while (list1 && list2) {
    let node = {val, next: null};

    if (list1.val <= list2.val) {
      node.val = list1.val
      list1 = list1.next
    } else {
      node.val = list2.val
      list2 = list2.next;
    }

    cur.next = node;
    cur = cur.next;
  }

  if (list1) cur.next = list1;
  if (list2) cur.next = list2;
  return dummy.next;
}