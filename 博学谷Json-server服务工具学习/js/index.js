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
function getData(){
    ajax('http://localhost:3000/students').then(value=>{
        console.log(value);
        document.querySelector('tbody').innerHTML=value.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `
        });
    })
}
getData();