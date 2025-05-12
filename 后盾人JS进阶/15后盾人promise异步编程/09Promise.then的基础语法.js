new Promise((resolve,reject)=>{
    resolve('买可乐');
    // reject('买不起')
    //两者只能生效一个
}).then(value=>{
    console.log(value); //接受成功的值  
},reason=>{
    console.log(reason);//返回失败的原因
})//如果没有处理 就会继续向下传递 