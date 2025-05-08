/* 模块就是把多个功能分隔成独立的文件，一个模块负责一部分功能，减低代码耦合度
模块可以给不同的文件划分独立作用域，多个文件中重名的变量不会相互影响
模块可以开放部分功能给外部 */
let moudle=(function(){
    const moduleList={};
    function define(name,modules,action){
        moduleList[name]=action.apply(null,modules)
        console.log(moduleList);
    }
    return {
        define
    }

})()
moudle.define("hd",[],function(){
    return {
        first(arr){
            return arr[0]
        }
    }
})