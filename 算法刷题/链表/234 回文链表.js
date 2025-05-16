/* 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。 */

//  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let head = [1,1,2,1];
/* var isPalindrome = function(head) {
    let curA=head;
    let newlist=function(head){
            // 1.先将链表反转
        let pre=null;
        let cur=head;
    while(cur){
            let next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        return pre;
    }
    let newhead= newlist(head);
    console.log(newhead);
    
    let curB=newhead;
    while(curA!=null&&curB!=null){//循环条件 两个指针都不为空
        if(curA.val!=curB.val){
            return false;
        }
        curA=curA.next;
        curB=curB.next;
    }
    return true;
};
console.log(isPalindrome(head));
 */
//思路 检测回文链表 先将链表反转 然后比较 上述方法部分可行 不建议

var isPalindrome = function(head) {
    //使用快慢指针
    let solwcur=head;
    let fastcur=head;
    while(fastcur!=null&&fastcur.next!=null){
        solwcur=solwcur.next;
        fastcur=fastcur.next.next;
    }
    //此时慢指针在中间位置 或偏左一个节点
    //此时反转链表
    function reverseList(slowcur){
        let pre=null;
        let cur=slowcur;
        while(cur){
            let next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        return pre;
    }
    let newhead=reverseList(solwcur);
    let curA=head;
    let curB=newhead;
    while(curA!=null&&curB!=null){
        if(curA.val!=curB.val){
            return false;
        }
        curA=curA.next;
        curB=curB.next;
    }
    return true;
};
1969212257
