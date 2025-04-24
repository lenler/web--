let data = {
    "name": "张三",
    "age": 18,
    "sex": "男",
    "desc": "简介简介简介简介"
}
let json=JSON.stringify(data,null,2)
console.log(json);
let js=JSON.parse(json)
console.log(js);
let js2=JSON.parse(json,function(key,val){
    if(key=="name"){
        return val+"11111"
    }
    return val
})
console.log(js2);
