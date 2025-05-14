async function fn(){
    try{
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject('error')
                throw new Error('error')//会直接停止执行 不会再执行setTimeout的timestam
            },1000)
        })
        console.log(1);
    }catch(e){
        console.log(e);
    }
}
fn()

/* async function fn(){
    throw new Error('error')
}
fn().catch(e=>{
    console.log(e);
}) */