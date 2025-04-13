let obj={
  uname:'123',
  age:12,
  gender:'女'
}
const arr=[1,2,3,45,5,6]

// 遍历对象属性
for(let k in obj){
  console.log(obj[k]);
}

// 遍历数组 - 修正了变量名不一致的问题
for (const key in arr) {
  console.log(arr[key]);  // 将k改为key保持变量名一致
}

// 更推荐使用for...of遍历数组
// 1. 遍历数组
for (const value of arr) {
  console.log(value); // 输出: 1, 2, 3, 45, 5, 6
}

// 2. 遍历字符串
const str = "hello";
for (const char of str) {
  console.log(char); // 输出: h, e, l, l, o
}

// 3. 遍历Map
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value); // 输出: a 1, b 2
}

// 4. 如果要遍历对象，可以先获取其键、值或条目
// 方法1: 遍历对象的键
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

// 方法2: 遍历对象的值
for (const value of Object.values(obj)) {
  console.log(value);
}

// 方法3: 遍历对象的键值对
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}