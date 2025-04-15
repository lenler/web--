let arr=[1,2,3,4,5,6,7,8,'9']
console.log(arr.indexOf(2))//返回元素所在的索引 没找到返回-1
console.log(arr.lastIndexOf(2));//从后开始查找 从右向左

console.log(arr.includes(2));//返回ture或false

// find方法查找 会遍历调用的数组 
let res=arr.find(function(item){
  return item===2
})
console.log(res);


// 10.数组every() 会改变原数组 返回一个新数组 判断数组中是否所有元素都满足条件 
// 如果都满足返回true 如果有一个不满足返回false 
const arr16=[1,2,3,4,5,6,7,8,9,10]
const arr17=arr16.every(item=>item>5)
console.log(arr17); //false
// 11.数组some() 会改变原数组 返回一个新数组 判断数组中是否有一个元素满足条件 
// 如果有一个满足返回true 如果都不满足返回false 
const arr18=[1,2,3,4,5,6,7,8,9,10]
const arr19=arr18.some(item=>item>5)
console.log(arr19); //true
//find() 会改变原数组 返回一个新数组 找到第一个满足条件的元素 返回该元素 如果没有找到返回undefined
const arr20=[1,2,3,4,5,6,7,8,9,10]
const arr21=arr20.find(item=>item>5)
console.log(arr21); //6