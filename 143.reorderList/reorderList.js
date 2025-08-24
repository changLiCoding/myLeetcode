function reorderList (head) {
  const arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next
  }

  const mid = Math.floor((arr. length - 1) / 2);

  const firstHalf = arr.slice(0, mid + 1);
  const secHalf = arr.slice(mid + 1).reverse();
  const res = []

  for (let i = 0; i < firstHalf.length; i++) {
    if (i === firstHalf.length - 1 && i === secHalf.length - 1) {
      firstHalf[i].next = secHalf[i];
      secHalf[i].next = null;
    } else if (i === firstHalf.length - 1) {
        firstHalf[i].next = null;
    } else  {
      firstHalf[i].next = secHalf[i];
      secHalf[i].next = firstHalf[i + 1];
    }
  }
  return firstHalf[0];
}

function reorderFastSlowPointer (head) {
  let slow = head, fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }

  let curr = slow.next;
  let prev = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp
  }

  slow.next = null;


  let first = head;
  let sec = prev;
  while (sec) {
    const temp1 = first.next;
    const temp2 = sec.next;
    first.next = sec;
    sec.next = temp1
    first = temp1;
    sec = temp2;
  }
  return head
}

const reorderListMerge = (head) => {
    let slow = head, fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }

  let curr = slow.next;
  let prev = (slow.next = null);
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp
  }

  let first = head;
  curr = prev;

  while (curr) {
    const temp1 = first.next;
    const temp2 = curr.next;
    first.next = curr;
    curr.next = temp1;
    first = temp1;
    curr = temp2;
  }
}