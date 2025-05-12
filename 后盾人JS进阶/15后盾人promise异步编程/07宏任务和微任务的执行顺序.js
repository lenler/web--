/* setImmedout(()=>{
    console.log('setImmedout')
},0)
console.log("我先执行");//先执行同步任务 然后执行微任务 最后执行宏任务
 */

/* new Promise((resolve, reject) => {
    console.log('promise');//第一个同步任务
    resolve('我是微任务')
}).then(value=>{
    console.log('我是微任务');//第一个微任务
})
console.log('我是同步任务');//第二个同步任务
setTimeout(() => {
    console.log('我是宏任务');//第一个宏任务
}, 0); */
// 我是同步任务 我是微任务 我是宏任务

//有一个宏任务提升的假象
let promise =new Promise((resolve)=>{
    setTimeout(() => {
        console.log('我是宏任务1');
        resolve()
    }, 0);
    console.log('我是同步任务1');
}).then(()=>{
    console.log('我是微任务1');
})
console.log('我是同步任务2');
//会发现宏任务提前微任务了 但这只是假象 宏任务的执行顺序还是按照顺序来的
