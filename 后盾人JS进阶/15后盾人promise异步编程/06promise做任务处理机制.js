console.log(
    new Promise((resolve,rejects)=>{
        //异步操作 的代码
        resolve('成功');
        rejects('失败');//报错失败
    }).then(value=>{
        //处理成功情况
        console.log('成功');
    },reason=>{
        //处理失败情况
        console.log('失败');
    })
);
