//call apply
let lisi={
    name:'lisi'
}
let wangwu={
    name:'wangwu'
}
function User(age,height){
    console.log(this);
    console.log(this.name+age+height);
}
// call传递参数必须为逗号分隔传递
User.call(lisi,18,180);
// apply传递参数必须为数组传递
User.apply(wangwu,[18,180]);
// 都会立刻执行函数