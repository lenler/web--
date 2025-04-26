//队列和栈很相似 但是队列是先进后出 尾部入队 头部出队 比栈更灵活 

/* 初始化队列 */
// JavaScript 没有内置的队列，可以把 Array 当作队列来使用
const queue = [];

/* 元素入队 */
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);

/* 访问队首元素 */
const peek = queue[0];

/* 元素出队 */
// 底层是数组，因此 shift() 方法的时间复杂度为 O(n)
const pop = queue.shift();

/* 获取队列的长度 */
const size = queue.length;

/* 判断队列是否为空 */
const empty = queue.length === 0;

//利用链表实现队列
class LinkedListQueue {
    #front;//头节点
    #rear;//尾节点
    #queSize=0;//队列长度

    constructor(){
        this.#front=null;
        this.#rear=null;
    }

    /* 获取队列的长度 */
    get size(){
        return this.#queSize
    }

    /* 判断队列是否为空 */
    isEmpty(){
        return this.#queSize===0;
    }

    /* 入队 */
    push(num){
        const node =new ListNode(num);
        if(this.isEmpty()){
            this.#front=node;
            this.#rear=node;
            //如果为空就是添加在队首
        }else{
            this.#rear.next=node;
            this.#rear=node;//node 是新的尾节点
        }
        this.#queSize++;
    }

    /* 出队 */
    pop(){
        const num=this.peek()
        this.#front=this.#front.next;
        this.#queSize--
        return num;
    }
    peek() {
        if (this.size === 0) throw new Error('队列为空');
        return this.#front.val;
    }

    /* 将链表转化为 Array 并返回 */
    toArray() {
        let node = this.#front;
        const res = new Array(this.size);
        for (let i = 0; i < res.length; i++) {
            res[i] = node.val;
            node = node.next;
        }
        return res;
    }
}

//基于数组实现队列
/* 基于环形数组实现的队列 */
class ArrayQueue {
    #nums; // 用于存储队列元素的数组
    #front = 0; // 队首指针，指向队首元素
    #queSize = 0; // 队列长度

    constructor(capacity) {
        this.#nums = new Array(capacity);
    }

    /* 获取队列的容量 */
    get capacity() {
        return this.#nums.length;
    }

    /* 获取队列的长度 */
    get size() {
        return this.#queSize;
    }

    /* 判断队列是否为空 */
    isEmpty() {
        return this.#queSize === 0;
    }

    /* 入队 */
    push(num) {
        if (this.size === this.capacity) {
            console.log('队列已满');
            return;
        }
        // 计算队尾指针，指向队尾索引 + 1
        // 通过取余操作实现 rear 越过数组尾部后回到头部
        const rear = (this.#front + this.size) % this.capacity;
        // 将 num 添加至队尾
        this.#nums[rear] = num;
        this.#queSize++;
    }

    /* 出队 */
    pop() {
        const num = this.peek();
        // 队首指针向后移动一位，若越过尾部，则返回到数组头部
        this.#front = (this.#front + 1) % this.capacity;
        this.#queSize--;
        return num;
    }

    /* 访问队首元素 */
    peek() {
        if (this.isEmpty()) throw new Error('队列为空');
        return this.#nums[this.#front];
    }

    /* 返回 Array */
    toArray() {
        // 仅转换有效长度范围内的列表元素
        const arr = new Array(this.size);
        for (let i = 0, j = this.#front; i < this.size; i++, j++) {
            arr[i] = this.#nums[j % this.capacity];
        }
        return arr;
    }
}