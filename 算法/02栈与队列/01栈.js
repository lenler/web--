//js没有内置栈的类 我们用数组来代替栈的写法
const stack=[];

//可以把栈理解成一个只有出口的一个试管 只允许元素单入栈和出栈 
// 试管里堆叠在顶部的元素的位置叫做“栈顶”，底部叫“栈底”
// 元素入栈
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
//元素出栈
stack.pop();
console.log(stack);
// 取栈顶元素
console.log(stack[stack.length-1]);
// 取栈底元素
console.log(stack[0]);
// 取栈的长度
console.log(stack.length);
// 取栈是否为空
console.log(stack.length===0);

// 基于链表的栈的实现
class Stack{
    #stackPeek ; // 栈顶
    #stkSize ; // 栈的大小

    constructor(){
        this.#stackPeek = null;
    }
    //获取栈的长度
    get size(){
        return this.#stkSize;
    }
    //判断栈是否为空
    isEmpty(){
        return this.#stkSize===0;
    }
    //入栈 默认头节点为栈顶
    push(num){
        // 因为栈的特点是入栈的元素都是栈顶元素 所以我们需要把新的元素放在栈顶
        const node =new ListNode(num);
        node.next=this.#stackPeek;//把新的元素的next指向栈顶元素
        this.#stackPeek=node;//把栈顶元素指向新的元素
        this.#stkSize++;//栈长度+1
    }
    //出栈
    pop(){
        const num=this.peek()//获取栈顶元素
        this.#stackPeek=this.#stackPeek.next;//把栈顶元素指向栈顶元素的下一个元素
        this.#stkSize--;//栈长度-1
        return num;//返回栈顶元素
    }
    //访问栈顶元素
    peek(){
        if(this.isEmpty()){
            throw new Error('栈为空');
        }
        return this.#stackPeek.val;
    }
    // 将链表的值转化为数组
    toArray(){
        let node=this.#stackPeek//获取栈顶元素
        const res=new Array(this.size)
        for(let i=res.length-1;i>=0;i--){
            res[i]=node.val//把栈顶元素的值放入数组
            node=node.next
        }
        return res//初始的栈顶元素在数组的最后面，因为出栈是从栈顶开始的 数组删除元素是从数组的最后面开始的
    }
}

/* 基于数组实现的栈 */
class ArrayStack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    /* 获取栈的长度 */
    get size() {
        return this.#stack.length;
    }

    /* 判断栈是否为空 */
    isEmpty() {
        return this.#stack.length === 0;
    }

    /* 入栈 */
    push(num) {
        this.#stack.push(num);
    }

    /* 出栈 */
    pop() {
        if (this.isEmpty()) throw new Error('栈为空');
        return this.#stack.pop();
    }

    /* 访问栈顶元素 */
    top() {
        if (this.isEmpty()) throw new Error('栈为空');
        return this.#stack[this.#stack.length - 1];
    }

    /* 返回 Array */
    toArray() {
        return this.#stack;
    }
}
// 这是两种栈的实现方式 数组支持额外的随机访问 
// 在时间复杂度上 数组的出栈和入栈的时间复杂度是O(1) 但是链表的出栈和入栈的时间复杂度是O(n) 所以链表会比数组慢一些 但是更稳定

/* 空间效率

在初始化列表时，系统会为列表分配“初始容量”，该容量可能超出实际需求；并且，扩容机制通常是按照特定倍率（例如 2 倍）进行扩容的，扩容后的容量也可能超出实际需求。因此，基于数组实现的栈可能造成一定的空间浪费。

然而，由于链表节点需要额外存储指针，因此链表节点占用的空间相对较大。 */