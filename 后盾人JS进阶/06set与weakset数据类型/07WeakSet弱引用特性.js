let hd={name:"houdunt"}
let edu=hd
//众所周知 edu引用的是hd创建的对象的地址 这时该内存被引用两次
// 但当我们删除hd
// hd=null;
//会发现edu仍然可以打印 这是因为js的垃圾回收机制是有人引用就不去回收 这是后被引用一次
// console.log(edu);  

//但是weakset中是弱引用
let set=new WeakSet()
set.add(hd)

hd=null
edu=null
console.log(set);//WeakSet { <items unknown> }读取不了元素


