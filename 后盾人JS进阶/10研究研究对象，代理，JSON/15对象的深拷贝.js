//关于深拷贝利用lodash库实现的方法在基础16中 这里就不在写了

let obj={
    name:"计算机",
    user:{
        name:"李四"
    },
    arr:[1,2,3]
}
//1.深拷贝函数递归实现
function deepCopy1(obj){
    let res={};
    for(let key in obj){
        if(typeof obj[key]==='Object'){
            res[key]=deepCopy1(obj[key])
        } else if(typeof obj[key]==='Array'){
            res[key]=deepCopy1(obj[key])
        }//这里的[key]在对象中是属性名 数组中是下标
        res[key]=obj[key]
    }
    return res;
}

let obj2=deepCopy1(obj);
console.log(JSON.stringify(obj,null,2),'拷贝前');
console.log(JSON.stringify(obj2,null,2),'拷贝后');


//2.暴力拷贝法
function deelClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
let obj3=deelClone(obj);
console.log(JSON.stringify(obj3,null,2),'暴力拷贝法');