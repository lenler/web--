function User(name,age) {
    this.name = name;
    this.age = age
}
let hd=new User('后盾人');
function createObject(obj,...args){
    const constructor=Object.getPrototypeOf(obj).constructor;
    return new constructor(...args);
}//通过这个函数 我们可以根据已有对象的构造函数来创建新的对象
let xj=createObject(hd,'xj','18');
console.log(xj);
