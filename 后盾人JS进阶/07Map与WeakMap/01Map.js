// map类型和obj类型的区别:对象的键只能是字符串类型，map的键名可以是各种类型
let obj = {
  1: "李四",
  "1": "张三",
};
console.log(obj); // 张三

//当我们想使用对象来作为键名就会非常麻烦
let hd={
 [obj]:'name' 
}

console.log(hd[obj.toString()]);


// 声明Map类型
let map = new Map();
// 键名为字符串 Map方法添加数据不是添加 叫设置数据
map.set("name", "李四");
// 键名为数字
map.set(1, "数字");
// 键名为方法
map.set(function() {}, "方法作为键名");
// 对象键名
map.set({}, "对象键名");
console.log(map);

//或者直接来定义
let map2=new Map([[{},"对象"],[[],'数组'],[function(){},'函数']])
console.log(map2);

