let map = new Map();
map.set("name", "李四");
map.set("age", "15");

// 遍历所有的key
console.log(map.keys());//返回所有的键

// 返回所有的值
console.log(map.values());

// 返回值和键
console.log(map.entries());

// for of 遍历键名
for (let key of map.keys()) {
  console.log(key);
}

// for of 遍历值
for (let val of map.values()) {
  console.log(val);
}

// 对象同时接收键和值
for (let [key, val] of map.entries()) {
  console.log(key, val);
}

// forEach 遍历 map,第一个值是键值，第二个值是键名
map.forEach((item, key) => {
  console.log(item, key);
});