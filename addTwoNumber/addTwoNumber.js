const addTwoNumber = (l1, l2) => {

  const helper = (link) => {
    const res = [link.val];
    while (res.next) {
      let temp = link.next;
      res.push(temp.val);
    }
    return res;
  };

  const arr1 = helper(l1);
  const arr2 = helper(l2);
  console.log(arr1, arr2);
  //const reverseL1 = l1.reverse().join('');
  //const reverseL2 = l2.reverse().join('');
  //const reverseNum1 = parseInt(reverseL1);
  //const reverseNum2 = parseInt(reverseL2);
  //const sum = reverseNum1 + reverseNum2;
  //return sum.toString().split('').reverse();
};

let linkList1 = {val: 2, next: { val: 4, next: {val: 3}}};
let linkList2 = {val: 5, next: { val: 6, next: {val: 6}}};
console.log(linkList1.next);


console.log(addTwoNumber(linkList1, linkList2));
