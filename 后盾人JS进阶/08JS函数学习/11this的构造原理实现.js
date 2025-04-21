function User(name){
    this.name = name;
}
let lisi=new User('lisi');//实例化 构造函数的实例
console.log(lisi);
// this不难见到this本是一个空的对象，通过实例化之后，this就指向了实例化的对象。
