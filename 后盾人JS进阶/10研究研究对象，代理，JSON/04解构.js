let user={
    name:'李四',
    age:18
}
let {name,age}=user
console.log(name,age); 

// 函数中的解构特性
function getuser({name,age}){
    console.log(name,age);
}
getuser(user)

//数学对象也是对象
let {PI}=Math
console.log(PI);
let{random}=Math
console.log(random);

//解构就是将对象的属性名解放出来

//数组解构也是一样 但是数组解构的顺序是按照索引来的
let arr=[1,2,3,4,5]
let [a,b,c,d,e]=arr
console.log(a,b,c,d,e);
//数组解构也可以跳过
let [f,,g,,h]=arr
console.log(f,g,h);