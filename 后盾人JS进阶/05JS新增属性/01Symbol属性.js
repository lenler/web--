// Symbol 每个 Symbol 值都是唯一的，即使使用相同的描述创建
// ：Symbol 属性不会出现在常规的遍历中（如 for...in 或 Object.keys()）
// Symbol可以将一个值永远设定为唯一值 最大的用法是用来定义对象的唯一属性名
let yf=Symbol("我是逸飞") //可以把它当成永远唯一的特殊字符串
console.log(yf);
console.log(yf.description);//提取Symbol的描述
 let a=Symbol.for("hedcms");
 console.log(a);
 //如果一个Symbol反复被使用可以使用Symbol for来定义
let gs1 = Symbol.for('global');
let gs2 = Symbol.for('global');
console.log(gs1 === gs2); // true

