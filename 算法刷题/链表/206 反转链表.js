/* 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null, cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur; 
        cur = next;
    }
    return pre;
}

