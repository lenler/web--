/* function request(){
    return new Promise((resolve,reject)=>{
        resolve('成功')
    })
}
request().then(value=>{
    console.log(value);
}) */
function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();
        xhr.onload=function(){
            if(xhr.status===200){
                resolve(JSON.parse(this.response));
            }else{
                reject('失败')
            }
        }
        xhr.onerror=function(){
            reject(this)
        }
    })
}