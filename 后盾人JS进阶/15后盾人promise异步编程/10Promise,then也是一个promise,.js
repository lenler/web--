let p1=new Promise((resolve,reject)=>{
    // resolve('买可乐');
    reject('买不起')
})
let p2=p1.then(value=>{
    console.log('成功');   
},reason=>{
    console.log('失败');
}).then(value=>{
    console.log('成功2');
},reason=>{
    console.log('失败2');
})

/* console.log(p1);
console.log(p2);//<pending> 等待状态 */

setTimeout(() => {
    console.log(p1);
    console.log(p2);//undefined  p2拿到了p1的状态 执行了then
    // 0秒后 状态已经改变 所以p2的值是undefined
}, 0);

// 如果直接打p1 p2 这时候p1 p2属于微任务 优先级晚于同步代码 所以打印的时候 p1 和p2暂时么有执行 p2还没有接受到p1的状态 但是如果把打印放在settimeou里面 这时候微任务要早于宏任务先执行 所以等到settimeout开始执行的时候 p2已经拿到了p1的状态 然后开始执行then