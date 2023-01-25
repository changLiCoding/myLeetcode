//const addTwoNumber = (l1, l2) => {



//const helper = (link) => {
//  const res = [link.val];
//  while (res.next) {
//    let temp = link.next;
//    res.push(temp.val);
//  }
//  return res;
//};

//const arr1 = helper(l1);
//const arr2 = helper(l2);
//console.log(arr1, arr2);
//const reverseL1 = l1.reverse().join('');
//const reverseL2 = l2.reverse().join('');
//const reverseNum1 = parseInt(reverseL1);
//const reverseNum2 = parseInt(reverseL2);
//const sum = reverseNum1 + reverseNum2;
//return sum.toString().split('').reverse();
//};

let arrayFromListNode = function(ln) {
  let res = [ln.val];
  while (ln.next) {
    ln = ln.next;
    res.push(ln.val);
  }

  return res;
};

let linkedListFromArray = function(a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = new ListNode(a[i]);
    if (i != 0 && i < a.length) {
      a[i - 1].next = a[i];
    } else {
      a[i].next = null;
    }
  }

  return a[0];
};

let addTwoArrays = function(a1, a2) {
  let shorterArray;
  let longerArray;
  if (a1.length > a2.length) {
    longerArray = a1;
    shorterArray = a2;
  } else {
    longerArray = a2;
    shorterArray = a1;
  }

  for (let i = 0; i < shorterArray.length; i++) {
    longerArray[i] = longerArray[i] + shorterArray[i];
  }

  for (let i = 0; i < longerArray.length; i++) {
    if (longerArray[i] >= 10) {
      if (i + 1 >= longerArray.length) {
        longerArray.push(1);
      } else {
        longerArray[i + 1] = longerArray[i + 1] + 1;
      }
      longerArray[i] = longerArray[i] - 10;
    }
  }

  return longerArray;
};

///**
// * @param {ListNode} l1
// * @param {ListNode} l2
// * @return {ListNode}
// */
let addTwoNumbers = function(l1, l2) {
  let l1_array = arrayFromListNode(l1);
  let l2_array = arrayFromListNode(l2);

  let res = addTwoArrays(l1_array, l2_array);

  return linkedListFromArray(res);
};



let linkList1 = {val: 2, next: { val: 4, next: {val: 3}}};
let linkList2 = {val: 5, next: { val: 6, next: {val: 6}}};
console.log(linkList1.next);


console.log(addTwoNumbers(linkList1, linkList2));
