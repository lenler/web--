do{
  console.log(111);
}while(0) 
// do while 要先进入do 先执行一次do里的函数 在进行while循环，所以不管while是什么条件都会先执行一次循环体
// 循环很危险！！！！！

let start=0;
do{
  let n=0;
  let line = "";  // 创建一个空字符串来存储当前行的星号
  do{
    line += "*";  // 将星号添加到字符串中
  }while(++n<=start)
  console.log(line);  // 打印完整的行
}while(++start<=5)
// 但是以我个人主见 使用for循环来完成这个效果是更好的

for(let i=0;i<5;i++){
  for(let j=0;j<i;j++){
    process.stdout.write(`*`);  // 使用process.stdout.write避免自动换行
  }
  process.stdout.write('\n');   // 手动添加换行
}
process.stdout.write()