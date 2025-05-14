//js先做主线程的同步任务 同时除了同步任务,其他任务分成了宏任务与微任务,
//微任务会先执行,然后执行宏任务
//宏任务:setTimeout,setInterval,setImmediate,requestAnimationFrame,UI交互事件
//微任务:promise.then,catch,finally,process.nextTick
setTimeout(()=>{
    console.log('我是宏任务');
},0)
new Promise((resolve,reject)=>{
    resolve('我是微任务')   
}).then(value=>{
    console.log(value);
})
console.log('我是同步任务');
/* 我是同步任务
我是宏任务 */