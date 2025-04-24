/* function User(name){
    this.name=name
    this.show=function(){
        console.log(this.name);
    }
}
let u1=new User('张三')
u1.show() */
// 这个步骤就是封装 
// u1.name='李四'
// 内部属性仍然可以被访问和修改 

// 抽象 将属性和方法封装到内部 外部无法访问
function User(name){
    let data={name}
    this.name=name
    this.show=function(){
        console.log(data.name);
    }
}
let u1=new User('张三')
u1.show()
this.name='李四'
u1.show()//张三
// 利用闭包实现封装 将内部属性和方法封装到内部 实现抽象