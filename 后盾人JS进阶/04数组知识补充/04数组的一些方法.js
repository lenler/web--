// 可以使用Array.isArray()方法来判断传入对象是不是数组 将伪数组转化为数组 利用展开运算符也可以
console.log(Array.isArray([]));//ture

let hd=[1,2,3,4,5]//.toString()//将数组转化为字符串
// console.log(typeof hd);

// 或者使用join（‘连接符’）方法
console.log(hd.join(' '));


// fill方法填充元素
console.log(Array(5).fill('你好'));

// 数组截取方法
// slice（截取位置，截取结束位置） 返回一个新数组 但不改变原数组
// splice（截取位置，截取元素个数）返回一个新数组 并改变原数组

// 清空数组
hd.length=0
console.log(hd);

//复制数组的元素
let hhh=[1,2,3,4,5,6,7,8]
console.log(hhh.copyWithin(4,1,3));//（要粘贴的位置，复制目标的起始位置，复制目标的结束位置（不包括该位置））

// filter 筛选数组 返回一个新数组 
const arr2=arr.filter(function(item,index){
  return item>=6 
})
console.log(arr2); //[6, 7, 8, 9, 10]

