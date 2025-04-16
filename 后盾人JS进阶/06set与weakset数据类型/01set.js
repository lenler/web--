// set是一个集合数据类型 和数组很类似 但是set中不能含有重复的数据
let set =new Set([1,2,3,4,5])
set.add(1);
set.add(1);
set.add(1);
console.log(set);

//增
set.add(1);
set.add(2);

//删
// 单个删除
set.delete(1);
// 清空全部
// set.clear();

// 查询方法
// 查询set里面的元素个数
console.log(set.size); // 2

// 展开语法查看set
console.log([...set]); // [1,2]

// 判断某个元素是否存在,返回布尔类型
console.log(set.has(1)); // true