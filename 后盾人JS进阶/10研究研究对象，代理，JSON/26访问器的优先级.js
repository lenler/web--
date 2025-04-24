const user={
    uname:"张三",
    age:12,
    set name(val){
        //如果uname不改变，就不执行 会报错 因为访问器的优先级高于属性
        this.uname=val
    },
    get name(){
        return this.uname
    }
}
user.name="李四"
console.log(user.name);//