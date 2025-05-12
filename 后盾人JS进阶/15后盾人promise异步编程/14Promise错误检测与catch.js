 new Promise((resolve,reject)=>{
     resolve('fulfilled')
    //  reject(new Error("promsie错误"))
    // jd+1;//如果写了错误 那么就会自动扔出错误
 })
 .then(
     value=>{
        return new Promise((resolve,reject)=>{
            reject(new Error("promsie错误"))
        }).then(
            value=>{
            console.log(value);
            },
            reason=>{
                console.log(reason);
                return reason;
            }
        )
     },
     reason=>{console.log(reason);}
 ) .then(value=>{
     console.log(value);
 })//或者写catch来专门获取错误 就不需要then的第二个参数了
 .catch(reason=>{console.log(reason);})//一般时候放在最后面 