setTimeout(()=>{
    console.log('我是宏任务');
})//定时器属于异步任务的宏任务队列

//定时器任务的执行顺序和定时器的时间有关
//时间短的先执行
setTimeout(() => {
    console.log('定时器1');
}, 2000);
setTimeout(() => {
    console.log('定时器2');
}, 1000);