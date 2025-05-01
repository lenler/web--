//super:this.__proto__
function User(name,age){
    this.name=name;
    this.age=age;
}
User.prototype.show=function(){
    console.log(`${this.name},${this.age}`);
}

const Request={
    ajax(){
        return "接口返回";
    }
}

const returns={
    //使用super关键字调用父级的方法 这里将父级设置为Request
    __proto__:Request,
    //使用super关键字调用父级的方法
    back(){console.log(super.ajax())}
}

function admin(...args){
    //创建对象继承User
    const ins=Object.create(User.prototype)
    User.apply(ins,args)
    return ins;
}
// 使用mixin继承多个功能 上面已经将Request继承到了returns
// 所以这里将returns继承到User
Object.assign(User.prototype,returns)
let admin1=new admin("hd",20)
admin1.show()
admin1.back()