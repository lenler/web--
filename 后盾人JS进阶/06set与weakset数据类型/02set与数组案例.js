// 案例一：筛选 set 中大于 5 的值
let set = new Set("123456789");
set = new Set([...set].filter((item) => item > 5));
console.log(set);
// 可以使用展开语法把set变成数组
console.log([...set]);
// 或者使用Array.from()把set变成数组
console.log(Array.from(set));