let hd={
    name:'后盾人',
    getName:function(){
        return function(){
            return this.name
        }
    }
}
console.log(hd.getName()());//undefined
//因为我么调用getname后返回一个函数 这个函数中的this是没有指向的 也就是直接指向了window 

let hd2={
    name:'后盾人',
    getName:function(){
        return ()=>{
            return this.name
        }
    }
} 
//箭头函数没有自己的this 他的this是继承的上层作用域的this
//这就是解决方法
console.log(hd2.getName()());//undefined
