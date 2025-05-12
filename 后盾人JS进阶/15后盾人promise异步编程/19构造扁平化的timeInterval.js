function interVal(delay,callback){
    return new Promise((resolve)=>{
        let id=setInterval(()=>{
            callback(id,resolve)//回调函数就是需要执行的函数体
        },delay);
    })
}
interVal(1000,(id,resolve)=>{
    console.log(1);
    clearInterval(id)
    resolve()
}).then(()=>{
    console.log(2);
})