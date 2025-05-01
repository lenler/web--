// 正确的继承方式
function User(){}

User.prototype.show=function(){
    console.log("show");
}


function Admin(){}
//我们在后面改变了admin的原型 那原来基于Admin原型创建的对象 原型并不会改变
let a=new Admin();
a.show();
//这里的a的原型认识Admin的原型


Admin.prototype = Object.create(User.prototype);
// 这里Admin的原型发生了改变 但是a的原型并没有改变

Admin.prototype.role = ()=>{
    console.log("role");
};

// a.role()//报错