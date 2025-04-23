/* 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
  */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1head, l2head) {
  // 注意这个函数中l1 l2是链表 list1 和list2 的头节点的指针
  const pre=new ListNode(-1);//初始化新的指针
  let cur=pre;//将pre指针指向的地址付费cur
  while(l1head!==null&&l2head!==null){
    if(l1head.val<=l2head){
      cur.next=l1head
      // 移动l1
      l1head=l1head.next
    }else{
      // 移动l2
      cur.next=l2head
      l2head=l2head.next
    }
    // 移动cur
    cur=cur.next
  }
  // 如果两个链表不等长 处理剩余链表
  cur.next=l1head===null?l2head:l1head;
  return pre.next//传递原始的头节点
};

// 递归
function mergeTwoLists(l1,l2){
  if(l1===null){
    return l2 
  } 
}
