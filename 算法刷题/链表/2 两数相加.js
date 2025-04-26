/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while (cur1 !== null || cur2 !== null || carry !== 0) {
        let num1 = cur1 ? cur1.val : 0;
        let num2 = cur2 ? cur2.val : 0;
        let sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);//就是取整 因为每次相加如果＞10  则需要进位  所以取整 将取出来的值存入carry  然后下一次相加时  加上carry  就可以了
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (cur1) cur1 = cur1.next;
        if (cur2) cur2 = cur2.next;
    }
    return dummy.next;
}
//思路  遍历两个链表 相加 同时建立一个新的链表 先创建一个变量存入相加的结果 然后取余 存入新链表 然后取商 存入carry 然后继续遍历 直到遍历完两个链表  最后判断carry是否为0  如果不为0  则将carry存入新链表  最后返回新链表的头节点