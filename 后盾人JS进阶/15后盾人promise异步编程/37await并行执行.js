let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1')
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p2')
    },1000)
})
async function fn(){
/*     let res1=await p1
    console.log(res1);
    let res2=await p2
    console.log(res2);
    console.log(res1,res2); */
    //这里的两个await是并行执行的 不是串行执行的 是同时进行的

    let res=await Promise.all([p1,p2])
    console.log(res);
}
fn()