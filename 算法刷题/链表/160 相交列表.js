/* 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null  */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let curB = headB;
    while (curA !==curB) {
      curA=curA===null?headB:curA.next;
      curB=curB===null?headA:curB.next;
    }
    return curA;
};
// 思路 使用双指针 当两个指针到头的时候就将另一个链表的头节点赋值给指针 这样两个指针走的步数就一样了 然后就可以找到目标节点了