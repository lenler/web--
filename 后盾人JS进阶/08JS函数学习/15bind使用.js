function show(){
    console.log(this.name);
}
show.bind({name:"lisi"});//不会立即执行函数 并且返回一个函数
//如果想立即执行给后面加一个括号
show.bind({name:"lisi"})();
let fn=show.bind({name:"lisi"});
fn();