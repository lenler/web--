let hd=new Object();
hd.name='后盾人';
console.dir(hd);//Object
/*
prototype: {show: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, 
__proto__: ƒ ()
*/
Object.prototype.show=function(){
    console.log(this.name);
}
hd.show();//后盾人// 来自Object的prototype原型里面的show方法

function User(){}
console.dir(User);//function
console.log(User.prototype);
//  






// 1.前提 每次声明对象都是 构造函数通过new 来创建的  
// 2.前提 每个函数天生自带一个prototype属性 这个属性是一个对象
// 3.前提 每个对象天生自带一个__proto__属性 这个属性是一个对象,prototype是对象他也有__proto__属性
// 4.前提 __proto__属性指向构造函数的prototype属性 构造函数的方法都可以传递到prototype属性上 然后通过__proto__属性传递到实例对象上 实例对象就可以调用构造函数的方法了 也就是__proto__其实是一根链子 用来链接两个proytotype属性

// 那么就有问题了 构造函数的prototype是哪来的呢？prototype就是一个普通对象 那我们刨根问底 对象怎么来的？ 对象是Object这个最原始的构造函数new出来的 既然都是构造函数了 那根据 前提2 Object这个构造函数也有一个prototype属性 这个属性就是一个普通对象 但是他已经是最原始的了 所以他的prototype通过__proto__这跟链子链接的上一个节点就是null 这就是原型链的尽头

// 所以我们要明白一点 原型链是通过prototype来链接的，通过这个链子我们可以传递链子上游节点的各种方法 而__proto__是实例对象和构造函数传递方法的桥梁，所以__proto__主要是用来传递方法的是和构造函数的prototype的关系最紧密的 通过__proto__和prototype的链接 实例对象就可以调用构造函数的方法了

// 总结 记住prototype是原型链的链接枢纽 __proto__是实例对象和prototype传递方法的桥梁 这样就能画出原型链的图了
