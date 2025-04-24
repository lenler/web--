let arr = [1, 2, 3, 4, 5];
console.log(arr.hasOwnProperty("length"));//true 这个方法只检测自己有没有这个属性
console.log('concat' in arr);//true 这个方法检测这个属性是否在原型上
//
let a={
    name:'lisi',
}
let b={
    age:18,
}
Object.setPrototypeOf(a,b);//设置a的原型为b
console.log(a.age);//18 a能访问到b的属性 也就是继承
console.log(a.hasOwnProperty('age'));//false a没有这个属性
console.log(`age` in a);//true a原型上有这个属性

