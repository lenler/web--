let set1 = [1, 2, 3, 4];
let set2 = [3, 4, 5, 6];

//利用set特性取并集
let bingji=new Set([...set1,...set2])
console.log(bingji);


// 交集，利用filter过滤其中一个数组中包含另外一个数组的值，返回交集
let jiaoji = set1.filter((item) => {
  return set2.includes(item); 
});
console.log([...jiaoji]);


// 差集，先合并两个数组在过滤两个数组中数组1不包含数组2的，和数组2 不包含数组1的
let chaji = [...new Set([...set1, ...set2])].filter((item) => {
  return !set1.includes(item) || !set2.includes(item);
});
console.log(chaji);