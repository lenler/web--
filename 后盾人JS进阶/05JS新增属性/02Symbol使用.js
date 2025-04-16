/* let grade={
  张三:{js:100,css:22},
  张三:{js:200,css:21}
} *///当一个班有重名现象就可以使用Symbol来解决
let user1 = {
  name: "李四",
  key: Symbol(),
};
let user2 = { 
  name: "李四",
  key: Symbol(),
};
let grade = {
  [user1.key]: { js: 99, css: 89 },
  [user2.key]: { js: 56, css: 100 },
};
console.log(grade[user2.key]); // { js: 56, css: 100 }