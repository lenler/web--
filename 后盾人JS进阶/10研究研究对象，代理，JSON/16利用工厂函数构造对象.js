//工厂函数和类相似
function Person(name){
    return {
        name:name,
        show:function(){
            console.log(this.name+'show');
        } 
    }
}
let p1=Person('张三')
p1.show()
// 工厂函数创建的对象是没有原型的