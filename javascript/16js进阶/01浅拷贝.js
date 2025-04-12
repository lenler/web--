 //浅拷贝：拷贝的是地址
    const obj={
      uname:'pink',
      age:18
    }


    const o=obj //这里是将存储obj的地址赋值给了o 也就是说o只要改变，那莫obj必然改变
    console.log(o)
    o.age=22
    console.log(obj)//会发现obj的age同样做了改变


    //不过我们可以利用一些方法来规避错误
    //1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象
    //2. 拷贝数组：Array.prototype.concat() 或者 [...arr]
    const o1={...obj}
    //const o1=Object.assign(obj)
    o1.age=20
    console.log(o1);
    console.log(obj);

    //看似完美的解决了问题，但是如果对象里出现复杂数据类型就会失效
    const obj2={
      uname:'red',
      age:18,
      family:{
        baby:'pink',
        age:1
      }
    }

    const p1={...obj2}
    p1.family.age=2
    console.log(p1);
    console.log(obj2)
    //会发现family里的值并没有像之前那样那绕过修改，这种问题往往需要深拷贝的方法来解决