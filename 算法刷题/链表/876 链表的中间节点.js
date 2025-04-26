/* 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。 */

//  * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};
let head=[1,2,3,4,5,6];
//思路任然是快慢指针 慢的移动一个   快的移动两个
// 当快的移动到链表末尾的时候 慢的刚好到中间


