function mergeLinkList (list1, list2) {
    const dummy = {val: 0, next: null};
    let curr = dummy;

    while (list1 && list2) {
        if(list1.val <= list2.val) {
            curr.next = list1;
            list1 =list1.next
        } else {
            curr.next = list2;
            list2 = list2.next
        }

        curr = curr.next
    }

    if (list1) curr.next = list1;
    if (list2) curr.next = list2;

    return dummy.next
}


function mergeList (head1, head2) {
  const dummy = {val: 0, next: null};

  let curr = dummy;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      curr.next = head1
      head1 = head1.next
    } else {
      curr.next = head2
      head2 = head2.next
    }

    curr = curr.next;
  }
    if (list1) curr.next = list1;
    if (list2) curr.next = list2;


  return dummy.next
}

function mergeTwoLists (list1, list2) {
  const dummy = {val: 0, next: null};
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next
    }

    cur = cur.next;
  }

  if (list1) {
    cur.next = list1;
  }
  if (list2) {
    cur.next = list2;
  }

  return dummy.next;
}