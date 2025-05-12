let p1=new Promise((resolve,reject)=>{
    resolve('fulfilled')//这是第一个resolve
    // reject('rejected')
}).then(
    value=>{
        //如果then返回是一个普通的值 那么下一个then就会接收到
        // return 'hello 第二个then'
        //如果then返回的是一个promise 那么下一个then就会等待这个promise的结果
       /*  return new Promise((resolve,reject)=>{
            // resolve('hello 第二个then 我是正确处理')
            reject('hello 第二个then 我是错误处理')
        }) */
        
        //如果不返回 直接在then中写一个新的promise 那么下一个then就会等待这个promise的结果 如果这个promise没有处理正确或者错误 就会报错
        new Promise((resolve,reject)=>{
            // resolve('hello 第二个then 我是正确处理')
            reject('hello 第二个then 我是错误处理')
        }).then(
            value=>{console.log(value);},
            reason=>{console.log(reason);}
        )
        /* hello 第二个then 我是错误处理
            undefined 这个undefined是下面的then的结果 因为对于第一个then他本就是一个新的promise 但是这个promise没有return 也就是没有上传结果但注意(这里是默认resolve的) 就会出现undefined  */
    },
    reason=>console.log('error '+reason)
).then(
    value=>{console.log('第二个then'+value);},
    reason=>{
        console.log(reason);
    }
)