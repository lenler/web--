let p1=new Promise((resolve,reject)=>{
    resolve('fulfilled')//这是第一个resolve
    // reject('rejected')
}).then(
    value=>{
      /*   return new Promise((resolve,reject)=>{
            resolve('hello 第二个then 我是正确处理')
            // reject('hello 第二个then 我是错误处理')
        }) */
       return {
          then(resolve,reject){
             resolve('这是对象')
              // reject('hello 第二个then 我是错误处理')
          }
       }//thenable 对象 可以当做promise来使用
    },
    reason=>{console.log(reason);}
).then(value=>{
    console.log(value);
})