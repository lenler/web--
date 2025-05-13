//Promise.all
//批量处理
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("成功1");
        reject("失败1");
    }, 1000);
})/* .catch(err=>{
    console.log(err);
})//如果有一个失败就失败 但catch之后捕捉到第一个失败的结果 然后传递给promise.all的状态是成功 */
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功2");
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功3");
        // reject("失败3")
    }, 3000);
})
Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})//只有获取到全部结果才会执行，如果有一个失败就失败 但catch之后捕捉到第一个失败的结果

