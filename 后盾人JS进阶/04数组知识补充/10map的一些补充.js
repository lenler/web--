// map 便利数组 返回一个新数组 
const arr3=arr.map(function(item,index){
  return item*2 
})
console.log(arr3); //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]



let lesson=[
  {titel:'css学习',body:'css'},
  {titel:'html学习',body:'html'},
  {titel:'JS学习',body:'js'}
]
// 当我们使用map方法时,map会遍历并且返回一个新数组,原数组是不会做出改变的但是这是针对简单数据类型而言的,对于引用数据类型,因为直接复制的地址的原因会出现同时发生改变的情况

//改变的只是hd arr不改变
let arr=[1,2,34,45]
let hd=arr.map(function(item){
  return item+10
})
console.table(arr)
console.table(hd)

// 但是对于引用数据类型

// 这里我只是修改了titel属性值，返回的是新字符串
// lesson数组中的对象本身没有被修改
let classs=lesson.map((item)=>item.titel+'课程')
console.table(classs)
console.table(lesson)


// 修改引用类型的例子
// 可以使用浅拷贝来避免这种情况
let modifiedLesson = lesson.map(item => {
  item.titel += '课程'; // 直接修改原对象
  return item; // 返回修改后的对象
});

console.table(modifiedLesson); // 所有标题都加了"课程"
console.table(lesson); // 原数组也被修改了！