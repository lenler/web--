/* new Promise((resolve)=>{
//只有改变状态才会执行
    setTimeout(() => {
        resolve('我是微任务1');
    }, 0);
}).then(value=>{
    console.log(value);
}).then(error=>{
    console.log(error);
})
console.log('同步代码'); */

//首先 promise有三种状态 分别是 成功 失败 等待
let p1=new Promise((resolve,reject)=>{
    resolve('成功2')//这是第一个resolve 
}).then((value)=>{
    console.log(value);
})
new Promise((resolve,reject)=>{
    resolve(p1)
}).then(value=>{
    console.log(value);
})

/* 
# Promise 状态与状态中转复习笔记

## 1. Promise 的三种状态
- **pending（进行中）**：初始状态，还没有结果。
- **fulfilled（已成功）**：调用 resolve 后，代表操作成功。
- **rejected（已失败）**：调用 reject 后，代表操作失败。
- 状态一旦变为 fulfilled 或 rejected 就不可逆。

## 2. 状态决定回调走向
- Promise 的状态决定了后续是走 then（成功）还是 catch（失败）。
- resolve 的值会作为第一个 then 的参数传递。
- 每个 then 的返回值会作为下一个 then 的参数。

## 3. 状态中转机制
- 如果 resolve 里传入另一个 Promise（比如 resolve(p1)），当前 Promise 的状态和结果会跟随 p1。
- 这样 Promise 的状态和结果就像链条一样传递。
- 如果 then 没有 return，默认返回 undefined，后续 then 拿到的就是 undefined。

## 4. 典型踩坑
- then 里不 return，链式 then 后面拿到的就是 undefined。
- 状态中转时，只有第一个 Promise 的状态和结果会影响后续链条。

> 记住：Promise 的状态是异步流程的核心，链式调用和状态中转让异步代码更丝滑！
 */