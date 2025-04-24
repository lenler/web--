/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/* 给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 141. 环形链表
// 要求判断链表中是否有环
var hasCycle = function(head) {
    if(head==null||head.next==null){
        return false;
    }
    let fastCur=head;
    let slowCur=head;
    while(fastCur!=null&&fastCur.next){
        fastCur=fastCur.next.next;
        slowCur=slowCur.next;
        if(fastCur===slowCur){
            return true;
        }
    }
    return false;
};
// 思路 使用快慢指针 快指针一次走两个节点 慢指针一次走一个节点 如果两者之间有一个从自己链表出去了就是无环的
// 两者如果有环迟早会相遇的 不用担心 因为是物理中的大追小模型