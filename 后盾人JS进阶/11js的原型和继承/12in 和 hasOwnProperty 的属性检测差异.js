/* in 语法检测一个属性是否在这个对象上或者在这个对象的原型链上
hasOwnProperty 值检测一个属性是否在这个对象上，不会检测原型链上的内容 */
let a = { name: "李四" };
let b = { age: "19" };


// in 语法检测属性是否在对象的原型链上
console.log("age" in a); // false
// 通过 Object.setPrototypeOf 设置a的原型为b
Object.setPrototypeOf(a, b);
// 这个时候回返回true
console.log("age" in a); // true



// hasOwnProperty只会检测当前元素，不会检测原型上面的东西
console.log(a.hasOwnProperty("age")); // false
for (const key in a) {
  // 使用 for in 时加上Object.hasOwnProperty(key) 可以只遍历对象本身的元素
  if (a.hasOwnProperty(key)) {
    console.log(key); // name
  }
  // 没有hasOwnProperty会遍历对象本身的元素以及原型上的元素
  console.log("没加" + key); // name age
}