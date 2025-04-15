// 其实区别很明显 for of可以改变遍历对象的值只针对引用类型而言    for in本质就是直接遍历原数组可以改变值 
let arr=[1,2,3,4]
for(let value of arr){
  value+=10
}
console.log(arr);


let arr1=[{n:1},{n:2},{n:3}]
for(let value of arr1){
  value.n+=10
}
console.log(arr1);
//for each 也是只针对引用类型才能改变值


// 基本类型示例 - 无法修改
let arr2 = [1, 2, 3];
arr2.forEach(item => {
  item += 10; // 这不会修改原数组
});
console.log(arr2); // 输出: [1, 2, 3]

// 引用类型示例 - 可以修改
let arr3 = [{n:1}, {n:2}, {n:3}];
arr3.forEach(item => {
  item.n += 10; // 这会修改原数组中的对象
});
console.log(arr3); // 输出: [{n:11}, {n:12}, {n:13}]