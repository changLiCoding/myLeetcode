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