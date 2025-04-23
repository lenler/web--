/* 题目  
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
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
 * @return {ListNode}
 */
// 目标删除升序链表中的重复元素
var deleteDuplicates = function(head) {
    //设置一个cur指针指向head 然后操作cur
    let cur = head;
    while(cur!=null&&cur.next!=null){
        //判断当前节点的值和下一个节点的值是否相等
        if(cur.val===cur.next.val){
            cur.next=cur.next.next;
        }else{
            //不相等就移动cur指针
            cur=cur.next;
        }
    }
    // 最后返回链表
    return head
};