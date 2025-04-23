// 对象解构，如果定义的变量名称和对象名称一样可以简写
let user = {
    name: "Lisi",
    age: 18,
  };
  let { name, age } = user;
  console.log(name);
  console.log(age);
  
// 将变量转为对象,可以简写
let height = 188;
weight = 56;
let hobj = { height, weight };
console.log(hobj);