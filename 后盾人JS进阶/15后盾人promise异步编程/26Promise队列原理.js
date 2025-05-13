//队列 按顺序执行promise任务
let promise=Promise.resolve();
/* promise.then((val)=>{
    console.log(val);
}).then((val)=>{
    console.log(val);
}) *///队列就不想上面这样直接操作 而是再返回一个promise

promise.then(v=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            
            resolve(1);
        },1000)
    })
}).then(v=>{
    console.log(v);
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(2);
            resolve(3);
        }, 2000);
    })
})//只有等第一个promise执行完了才会执行第二个promise 队列就是按顺序执行