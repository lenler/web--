// 数组在js里面是内置的数据类型 
// 我们可以根据需求选用数组的两种初始化方式：无初始值、给定初始值。
// 在未指定初始值的情况下，大多数编程语言会将数组元素初始化为
/* 初始化数组 */
const arr = new Array(5).fill(0);
const nums = [1, 3, 2, 5, 4];
// 数组元素被存储在连续的内存空间中，这意味着计算数组元素的内存地址非常容易

//1. 随机访问数组元素函数
const randomAccess=(nums)=>{
    const random_index=Math.floor(Math.random()*nums.length);
    const random_num=nums[random_index]
    return random_num;
}

// console.log(randomAccess(nums));

//2.插入元素 数组中的内存都是紧挨着的所以没有空间去单独插入一个元素
//所以插入一个元素就意味着把后面的元素都删除然后插入存入新元素再把原本的元素写入数组
// 值得注意的是，由于数组的长度是固定的，因此插入一个元素必定会导致数组尾部元素“丢失”
function inset(nums,num,index){
    for(let i=nums.length-1;i>index;i--){
        nums[i]=nums[i-1]
    }//思路是倒着遍历数组 直到遍历到准备插入的那个元素的下标 每次循环都把靠前一位元素的值赋值给自己，自己的值赋值给后一位元素
    //这样就从后往前把数组拉出来空了一位
    nums[index]=num
}

// inset(nums,0,0)
// console.log(nums);

//或者直接使用js内部方法
function inset2(nums,index,num){
 // 第一个参数是插入的位置 第二个参数是删除的个数 第三个参数是插入的元素
    nums=nums.splice(index,0,num)
}

// inset2(nums,0,0)
// console.log(nums);


// 3.删除元素
/* 删除索引 index 处的元素 */
function remove(nums, index) {
    // 把索引 index 之后的所有元素向前移动一位
    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }
}
//或者使用js内置的删除方法
function remove2(nums,index){
    nums=nums.splice(index,1)
}

// 5.   遍历数组¶
// 在大多数编程语言中，我们既可以通过索引遍历数组，也可以直接遍历获取数组中的每个元素：
/* 遍历数组 */
// 这里就不细说了

// 6.   查找元素¶
// 在数组中查找指定元素需要遍历数组，每轮判断元素值是否匹配，若匹配则输出对应索引。
// 因为数组是线性数据结构，所以上述查找操作被称为“线性查找”
/* 在数组中查找指定元素 */
function find(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}

/* 7.   扩容数组¶
在复杂的系统环境中，程序难以保证数组之后的内存空间是可用的，从而无法安全地扩展数组容量。因此在大多数编程语言中，数组的长度是不可变的。

如果我们希望扩容数组，则需重新建立一个更大的数组，然后把原数组元素依次复制到新数组。这是一个 
 的操作，在数组很大的情况下非常耗时。代码如下所示：
 */
/* 扩展数组长度 */
// 请注意，JavaScript 的 Array 是动态数组，可以直接扩展
// 为了方便学习，本函数将 Array 看作长度不可变的数组
function extend(nums, enlarge) {
    // 初始化一个扩展长度后的数组
    const res = new Array(nums.length + enlarge).fill(0);
    // 将原数组中的所有元素复制到新数组
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i];
    }
    // 返回扩展后的新数组
    return res;
}

//总结一下数组的优点 第一就是空间效率很高 连续的内存分配造就了数组极高的内存利用率
//空间效率高：数组为数据分配了连续的内存块，无须额外的结构开销。
/* 支持随机访问：数组允许在 
时间内访问任何元素。
缓存局部性：当访问数组元素时，计算机不仅会加载它，还会缓存其周围的其他数据，从而借助高速缓存来提升后续操作的执行速度。
连续空间存储是一把双刃剑，其存在以下局限性。

插入与删除效率低：当数组中元素较多时，插入与删除操作需要移动大量的元素。
长度不可变：数组在初始化后长度就固定了，扩容数组需要将所有数据复制到新数组，开销很大。
空间浪费：如果数组分配的大小超过实际所需，那么多余的空间就被浪费了。 */