//封装定时器
function timeout(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,delay);
    })
}
timeout(2000).then(()=>{
    console.log('hello world');
    return timeout(2000)
}).then(()=>{
    console.log('hello world');
})
// 66666666666666