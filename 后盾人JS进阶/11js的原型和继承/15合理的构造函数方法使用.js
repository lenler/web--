function Person(name){
    this.name = name;
    // this.showName = function(){
    //     console.log(this.name)
    // }
}
let lisi=new Person('李四')
let zhangsan=new Person('张三')
console.log(lisi);
console.log(zhangsan);
//展开会发现 这个两个方法都是一样的 但是占用了两分内存 所以我们可以利用原型链 将方法挂在原型上
Person.prototype.showName=function(){
    console.log(this.name)
}//这是在原有原型上追加新方法
lisi.showName()
zhangsan.showName()

//如果一次有要追加多个方法 可以利用对象的方式 一次性追加
Person.prototype={
    constructor:Person,
    showName:function(){
        console.log(this.name)
    },
    showAge:function(){
        console.log(this.age)
    }
}