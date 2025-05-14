//微任务晚于同步任务执行 先于宏任务执行
setTimeout(() => {
    console.log('我是宏任务');
}, 0);
new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    console.log('我是微任务');
})
console.log('我是同步任务');