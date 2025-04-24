let user = {
  name: "lisi",
};
// 查看name的各项属性
console.log(
  JSON.stringify(Object.getOwnPropertyDescriptor(user, "name"), null, 2)
);

//我们修改对象的属性值试试‘’
Object.defineProperty(user,"name",{
    value:'张三',
    writable:false,//禁止改写
    enumerable:false,//禁止遍历
    configurable:false//禁止删除
})
console.log(user);//name变为了张三
user.name='李四'
console.log(user);//name还是张三
//我们遍历一下user看看
for(let key in user){
    console.log(key);
}//没有输出name
//我们删除一下user的name看看
delete user.name
console.log(user);//name还是张三
