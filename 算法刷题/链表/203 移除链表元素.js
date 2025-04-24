/* 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
  */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead=new ListNode(0);
    newHead.next=head;
    let cur=newHead;
    while(cur.next!=null){
        if(cur.next.val===val){
            cur.next=cur.next.next;
        }else{
            cur=cur.next;
        }
    }
    return newHead.next;
};
// 思路创建虚拟头节点 然后判断下一个节点的值是否为val 是则删除 不是则继续下一个节点 最后返回虚拟头节点的下一个节点
