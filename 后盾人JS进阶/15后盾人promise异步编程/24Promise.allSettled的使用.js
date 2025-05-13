const p1=new Promise((resolve,reject)=>{
    reject("失败1")
})
const p2=new Promise((resolve,reject)=>{
    resolve("成功2")
})
Promise.allSettled([p1,p2]).then(res=>{
    console.log(res);
})//不管成功失败都会执行 但是返回的是一个数组 数组中每个元素是一个对象 每个对象有一个status属性 表示状态 一个value属性 表示值