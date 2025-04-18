let map = new Map();
// 增
map.set('name','张三')
map.set('age',18)
// 删除
// 单个删除，返回布尔值
console.log(map.delete('age'));
// 全部删除，没有返回值
// map.clear()
// 查询
console.log(map.get('name'));
