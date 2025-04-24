const obj = {
  _name: '小张',
  get name() {
    return this._name + '（访问器返回）';
  },
  set name(val) {
    this._name = val.trim();
  }
};
obj.name = '  张三  '//注意使用方法是和属性一样的
console.log(obj.name); // 输出：张三（访问器返回）

function user(naem){
    return{
        data:{name:naem},
        get name(){
            return this.data.name
        },
        set name(val){
          this.data.name=val
        }
    }
}