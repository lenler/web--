let symbol = Symbol();
let obj = {
  name: "李四",
  [symbol]: "张三",
};
// 普通遍历遍历不到 symbol 属性
for (let key in obj) {
  console.log(key);
}

// 通过for of Reflect.ownKeys()可以遍历到对象里面的 symbol 属性
for (let key of Reflect.ownKeys(obj)) {
  console.log(key);
}


let site = Symbol();
class User {
  constructor(name) {
    this.name = name;
    this[site] = "houdunren";
  }
  getName() {
    return `${this.name} ${this[site]}`;
  }
}

let newuser=new User("lisi")
console.log(newuser.getName());


// 不能获取到symbol属性
for (let key in newuser) {
  console.log(newuser[key]); // lisi
}