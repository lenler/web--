//在学习完递归的基本用法之后我们可以试着解决一下浅拷贝中未解决的问题
const obj = {
  uname: 'pink',
  age: 18,
  hobby: ['乒乓球', '足球'],
  family: {
    baby: '小pink'
  }
}

const o = {}
//现在我们学习一下深拷贝函数
function deepCopy(newobj,oldobj){
  for(let k in oldobj){
    //通过let k in循环便利老对象（数组）
    
    //当遇见oldobj【k】为一个数组或是对象时
    if(oldobj[k] instanceof Array){//判断其原型对象是不是数组
      // 当碰见数组时，我们就让新的newobj【k】也初始化为数组
      newobj[k]=[]
      //然后递归函数，重新判断拷贝
      deepCopy(newobj[k],oldobj[k])
    }else if(oldobj[k] instanceof Object){
      //同理的对于对象我们也做一样的
      newobj[k]={}
      //然后递归函数，重新判断拷贝
      deepCopy(newobj[k],oldobj[k])
    }else{
      newobj[k]=oldobj[k]
    }
  }
}

deepCopy(o,obj)
o.age=1
console.log(o);
console.log(obj);
//可见结果很理想


 /*这是每一次递归后的详解
 function deepCopy({ }, oldObj) {
      // k 属性名  oldObj[k] 属性值
      for (let k in oldObj) {
        // 处理数组的问题   k 变量
        newObj[k] = oldObj[k]
        // o.uname = 'pink'
        // newObj.k  = 'pink'
      }
    } */