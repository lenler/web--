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

//这样理解 就是async函数就像一条河一样向下运行，然后每一个await就是一个阀门 如果await的结果不是成功就不会打开这个阀门 async的运行就会被截停 然后每个任务都是一条河 他们是否停止运行都不会影响主程序里的同步任务的运行
/* - async 函数像一条河 ：它确实是按照代码顺序一股脑儿往下流。
- await 就像阀门 ：遇到 await ，这条河就得在这儿等等。如果 await 等来的那个 Promise 成功了（阀门打开），河水就继续流；如果那个 Promise 失败了（阀门卡住了或者坏了），那这条 async 河的后续水流确实就过不去了，它会带着这个“失败”的结果（也就是 rejected Promise）往外冒，除非你用 try...catch 给它修好或者疏通一下。
- 不影响主河道（主程序） ：最最关键的是，这些 async 河流里的阀门开不开、水流停不停，都 不会堵塞主河道 （也就是你说的同步任务或者其他不相关的代码）。主河道该怎么流还怎么流，其他的小河该怎么跑还怎么跑。这就是异步的魅力，不卡顿，丝滑得很！ */