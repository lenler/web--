/* 迭代器协议要求对象实现一个 next() 方法，该方法返回一个包含两个属性的对象：
value: 当前迭代的值
done: 布尔值，表示迭代是否完成 */

/* 这个迭代器对象本质上就是一个"智能指针"，它知道：
当前指向哪个元素（通过 value 属性）
是否已经遍历完所有元素（通过 done 属性） */
const arr = [1, 2, 3];

// 获取迭代器对象（注意变量名改为values）
let values = arr.values();

// 使用迭代器
console.log(values.next()); // {value: 1, done: false} ← 指向第一个元素
console.log(values.next()); // {value: 2, done: false} ← 移动到第二个元素
console.log(values.next()); // {value: 3, done: false} ← 移动到第三个元素
console.log(values.next()); // {value: undefined, done: true} ← 已遍历完

// 更直观的遍历方式
while(true) {
  const {value, done} = values.next();
  if(done) 
    {
      break;
    }
  console.log(value); // 依次输出 1, 2, 3
}

