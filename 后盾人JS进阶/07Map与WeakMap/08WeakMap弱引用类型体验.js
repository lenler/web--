let obj={
  name:'list'
}
let weakmap=new WeakMap();
weakmap.set(obj,'houdunren')

// 验证WeakMap中是否有这个键
console.log(weakmap.has(obj));  // 会输出 true

// 获取值
console.log(weakmap.get(obj));  // 会输出 'houdunren'

obj = null;

console.log(weakmap);

setTimeout(() => {
  // 倒计时一秒后再打印结果为空
  console.log(weakmap);
}, 1000);