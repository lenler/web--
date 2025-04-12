//这应该是深拷贝最简单的方法了
const obj = {
  uname: 'pink',
  age: 18,
  hobby: ['乒乓球', '足球'],
  family: {
    baby: '小pink'
  }
}
// 把对象转换为 JSON 字符串
console.log(JSON.stringify(obj))
// 将对象全部转化为字符串再将字符串转化为对象，避免了对象地址的问题
const o = JSON.parse(JSON.stringify(obj))
console.log(o)
o.family.baby = '123'
console.log(obj)