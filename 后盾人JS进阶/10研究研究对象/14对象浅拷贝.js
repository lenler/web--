let user = {
    name: "lisi",
    age: 18,
  };
  
  // 方式一，解构语法
  let newuser1 = { ...user };
  newuser1.name = "wangwu";
  console.log(newuser1, "newuser1"); // {name: "wangwu", age: 18}
  console.log(user, "user"); // {name: "lisi", age: 18}
  
  // 方式二,巧用对象合并 assign
  let newuser2 = Object.assign({}, user);
  newuser2.name = "zhaoliu";
  console.log(newuser2); // {name: "zhaoliu", age: 18}
  console.log(user); // {name: "lisi", age: 18}
  
  // 方式三，for in 循环赋值
let newUser={}
for(let key in user){
    newUser[key]=user[key]
}
console.log(newUser);
