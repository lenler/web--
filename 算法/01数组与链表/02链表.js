//链表是一种线性数据结构，但是链表相较于数组这样连续的内存 他显得非常灵活
//链表是由一块块不连续的空间通过引用（指针）链接起来的
// 所以链表的增删改查都非常的灵活 但显然他的缺点也非常明显
/* 
链表的首个节点被称为“头节点”，最后一个节点被称为“尾节点”。
尾节点指向的是“空”，它在 Java、C++ 和 Python 中分别被记为 null、nullptr 和 None 。
在 C、C++、Go 和 Rust 等支持指针的语言中，上述“引用”应被替换为“指针”。
 */

//现在定义一个节点类
class ListNode{
    constructor(value,next){
        if(value===undefined){//为了直观展现逻辑关系 这里就不使用三元判断符了
            this.value=0;
        }else{
            this.value=value
        }

        //这里我有一点想聊聊
        //前面其实学过在js里面对于复杂数据类型的直接赋值其实就是赋值对方的内存地址
        //这一点正好了c语言里的指针一样，这也是js链表没有指针但引用仍然可以和指针一样的原因
        if(next===undefined){
            this.next=null//因为next这个引用要指向的是下一节点的内存地址
        }else{
            this.next=next
        }
    }
}

//1.初始化链表
// 建立链表分为两步，第一步是初始化各个节点对象，第二步是构建节点之间的引用关系。
// 初始化完成后，我们就可以从链表的头节点出发，通过引用指向 next 依次访问所有节点。

/* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
// 初始化各个节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
// 我们通常将头节点当作链表的代称，比如以上代码中的链表可记作链表 n0 。

//2.插入节点 
// 操作方法就是找到插入位置的前后两个节点 然后将前节点的next指向插入节点 插入节点的next指向后节点
function insert(n0, p) {
    if (!n0 || !p) return;  // 参数校验
    p.next = n0.next;  // 1. 新节点指向原后继节点
    n0.next = p;       // 2. 前驱节点指向新节点
}

//3.删除节点
//操作方法找到要删除的节点的前一个节点 让该节点的前一个节点指向删除节点的后一节点即可
/* 删除链表的节点 n0 之后的首个节点 */
function remove(n0) {
    if (!n0 || !n0.next) return null;  // 增强边界检查
    const removedNode = n0.next;      // 保存被删除节点（可选）
    n0.next = n0.next.next;           // 跳过被删除节点
}
/* 
删除前: n0 -> P -> n1
删除后: n0 -> n1
 */

//4. 访问节点
//因为链表的访问必须从头节点开始一个个向后访问，不能像数组一样通过索引直接访问 所以效率很低
function access(head,index){
    //访问第index节点（一般节点命名就是n index）
    for(let i=0;i<index;i++){
        if(head===undefined||head==null){
            return null
        }
        head=head.next
    }
    return head
}

// console.log(access(n0,3));

//5.遍历节点
function mapEach(head) {
    if(!head) return null;
    let cur = head;
    while(cur !== null) {  // 改为检查当前节点而非下一个节点
        console.log(cur.value);  // 打印当前节点值
        cur = cur.next;  // 移动到下一个节点
    }
    return head;  // 返回头节点以便链式调用
}

// 使用示例
mapEach(n0);  // 会依次打印：1 3 2 5 4

// 6.查找节点
// 遍历链表，查找其中值为 target 的节点，输出该节点在链表中的索引。此过程也属于线性查找
/* 在链表中查找值为 target 的首个节点 */
function find(head, target) {
    let index = 0;
    while (head !== null) {
        if (head.value === target) {  // 改为检查value而非val
            return index;
        }
        head = head.next;
        index += 1;
    }
    return -1;
}

console.log(find(n0, 3));  // 现在会正确返回0


//双向节点 
/* 与单向链表相比，双向链表记录了两个方向的引用。
双向链表的节点定义同时包含指向后继节点（下一个节点）和前驱节点（上一个节点）的引用（指针）。相较于单向链表，
双向链表更具灵活性，可以朝两个方向遍历链表，但相应地也需要占用更多的内存空间。
 */
/* 双向链表节点类 */
class ListNode {
    constructor(val, next, prev) {
        this.val = val  ===  undefined ? 0 : val;        // 节点值
        this.next = next  ===  undefined ? null : next;  // 指向后继节点的引用
        this.prev = prev  ===  undefined ? null : prev;  // 指向前驱节点的引用
    }
}