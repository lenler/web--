console.log(
    new Promise((resolve,rejects)=>{
        //异步操作 的代码
        resolve('成功');
        // rejects('失败');//报错失败
    }).then(value=>{
        //处理成功情况
        console.log('成功1');
    },reason=>{
        //处理失败情况
        console.log('失败');
    }).then(value=>{
        //处理成功情况
        console.log('成功2');
    },reason=>{
        //处理失败情况
        console.log('失败');
    })//成功1 成功2
);//相比于回调函数 更加的优雅
//这里的任务处理 涉及到微任务和宏任务 promise上传入微任务队列 然后执行