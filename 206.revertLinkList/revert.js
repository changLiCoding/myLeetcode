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

function iteration (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = temp
  }

  return prev;
}

function revertALinkList (head) {
  let curr = head;
  let prev = null;

  while (!curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

function mergeTwoArr (arr1, arr2) {

  let l = 0, r = 0, res = [];

  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] >= arr2[r]) {
      
      res.push(arr2[r])
      r++;
    } else {
      res.push(arr1[l])
      l++;
    }

    
  }
  
  if (l < arr1.length) res.push(...arr1.slice(l));
  if (r < arr2.length) res.push(...arr2.slice(r));
  return res;
}


const revertALinkList = (head) => {
  let prev = null, curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev;
}

const mergeSortedLinkList = (list1, list2) => {

  const dummy = {val: 0, next: null};
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next
  }

  return dummy.next;
}

const isCircle = (head) => {
  const seen = new Set();
  let cur = head;
  while (cur) {
    if (seen.has(cur)) return true;
    seen.add(cur);
    cur = cur.next;
  }

  return false;
}