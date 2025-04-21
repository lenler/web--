//请求地址
function Article() {
    this.url='article/lists'
   request.call(this)
}
let a=new Article();
console.log(a.get({page:1,size:10}));

//请求用户
function User() {
    this.url='article/lists'
    request.call(this)
}
let u=new User();
console.log(u.get({id:1,role:"admin"}));

//但是有个问题 就是如果我们想改变网址就会很困难 没有复用性 所有现在我们创建一个复用函数
function request(){
    this.get=function(params){
        // 其中params就是传入的对象  Object.keys将对象以数组的形式返回  然后map遍历数组  然后join将数组以&连接起来    k对象的键   params[k]对象的值
        let str=Object.keys(params).map(k=>`${k}=${params[k]}`).join('&')
        let url=`https://houdunren.com?${this.url}/${str}`
        console.log(url);
    };
}//注意 这个函数不是构造函数 是没有实例化对象的 也就是说这个函数的this指向的windows 调用的时候需要call或者apply改变this的指向 