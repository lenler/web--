function queue(num){
    let promise=Promise.resolve();
    num.forEach(item=>{//map是数组的方法 会以此遍历数组的每一项 使用foreach也可以达到同样的效果
        promise=promise.then(()=>{//每次遍历都会返回一个新的promise 并且这个新的promise的状态是上一个promise的最后更新的状态
            return new Promise((resolve)=>{//这里返回的promise的状态是resolve的 所以下一个promise的状态就是resolve的
                setTimeout(()=>{
                    console.log(item);//这里的item是数组的每一项
                    resolve()   
                },1000)
            })
        })
    })
}
queue([1,2,3,4,5,6])