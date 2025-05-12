// 不同的错误处理的方式不同 有的错误不会返回给用户
    //例如：  
    new Promise((resolve, reject) => {
        resolve('3.3成功');
        // reject('失败');
      }).then(value => {
        console.log(value);//成功
        throw new Error('自定义错误'); //抛出错误
      })
        .then(value => {
          console.log(value);
        })
        .catch(reason => {
          console.log(reason);//Error: 自定义错误
        });
  