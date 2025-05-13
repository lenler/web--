//async await 是promise的语法糖 类似于class简化了promise的使用
/* new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
}).then((val)=>{
    console.log(val);
}) 以往的promise写法*/

 async function fn(){
    //默认状态是resolve的
    return 1;
    //如果想返回reject的状态 可以使用throw new Error('错误') 只能自己手动抛出
}//类似等于new Promise((resolve)=>{})
fn().then((val)=>{
    console.log(val);
})

//await 就是then的简写 虽然运行逻辑看着跟同步任务一样 但本质上就是异步任务
async function fn2() {
    // let a = await '我是返回'
    let a = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('fullfild')
        }, 1000);
    }) 
    let site=await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('fullfild')
        }, 1000);
    }) 
    console.log(site);//一个await就是一个默认返回resolve的then 就相当于连续在一个promise上不断使用then方法
}
fn2()