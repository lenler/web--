//一般定义的await后面都是promise对象
async function fn(){
    try {
        await new Promise((resolve,reject)=>{
            reject('error')
        })
    }catch(e){
        console.log(e);
    }
    console.log("catch处理后正常处理");
    
}
fn()