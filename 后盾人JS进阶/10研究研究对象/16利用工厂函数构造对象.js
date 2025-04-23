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