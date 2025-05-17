//获取按钮
let search=document.querySelector('.find')
let addPost=document.querySelector('.add')
let deletes=document.querySelector('.delete')
let changed=document.querySelector('.change')

//封装ajax
function ajax(url, states, data=null){
    //这里的states是状态
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        //初始化
        xhr.open(states,url)
        //设置请求头
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        if(states==='GET'){
           //查询数据
           xhr.onload=function(){
                if(xhr.status===200){
                    let students=JSON.parse(xhr.response);
                    resolve(students)
                }else{
                    reject('请求失败');
                }
           }
           xhr.send()
        }else if(states==='POST'){
            xhr.onload=function(){
                if(xhr.status===201){
                    const PostText=JSON.parse(xhr.responseText)
                    resolve(PostText)
                    alert('添加成功')
                }else{
                    reject('失败')
                }
            }
            xhr.send(JSON.stringify(data))
        } else if(states==='PUT'){
            xhr.onload=function(){
                if(xhr.status===200){
                    const putText=JSON.parse(xhr.responseText)
                    resolve(putText)
                    alert('修改成功')
                }else{
                    reject('修改失败')
                }
            }
            xhr.send(JSON.stringify(data))
        }else if(states==='DELETE'){
            xhr.onload=function(){
                if(xhr.status===200||xhr.status===204){
                    resolve('成功删除')
                }else{
                    reject('修改失败')
                }
            }
            xhr.send()
        } 
    })  
}

/* 添加数据 */
addPost.addEventListener('click',function(){
    // 获取添加数据
    let inputID = document.querySelector('.id');
    let inputName = document.querySelector('.name');
    let inputChinese = document.querySelector('.chinese');
    let inputMath = document.querySelector('.math');
    let inputEnglish = document.querySelector('.english');


    const id = inputID.value;
    const name = inputName.value;
    const chineseScore = parseFloat(inputChinese.value) || 0;
    const mathScore = parseFloat(inputMath.value) || 0;
    const englishScore = parseFloat(inputEnglish.value) || 0;
    const totalScore = chineseScore + mathScore + englishScore;

    if(id===''||name===''||chineseScore===''||mathScore===''||englishScore===''){
        return alert('请输入完整信息')
    }
    const studentData = {
        id: id,
        name: name,
        Chinese: chineseScore,
        Math: mathScore,
        English: englishScore,
        total: totalScore
    };

    ajax('http://localhost:3000/students', 'POST', studentData).then(addedStudent => {
        console.log('添加成功:', addedStudent);
        // 添加成功后，重新获取并显示所有学生数据
        return ajax('http://localhost:3000/students', 'GET');
    }).then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
            return b.total-a.total
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

/* 查询数据 */
//获取查询按钮
search.addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='flex';
})

//按照id查询
document.querySelector('.byID').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    ajax('http://localhost:3000/students', 'GET').then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
            return a.id-b.id
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

//总分排名
document.querySelector('.byTotal').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    ajax('http://localhost:3000/students', 'GET').then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
            return b.total-a.total
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

//语文排名
document.querySelector('.byChinese').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    ajax('http://localhost:3000/students', 'GET').then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
            return b.Chinese-a.Chinese
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

//数学排名
document.querySelector('.byMath').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    ajax('http://localhost:3000/students', 'GET').then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
            return b.Math-a.Math
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

//英语排名
document.querySelector('.byEnglish').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    ajax('http://localhost:3000/students', 'GET').then(allStudents => {
        function sortScore(students){
            students.sort(function(a,b){
                return b.English-a.English
            })
        }
        sortScore(allStudents);
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join(''); // 使用 join('') 来合并数组为字符串
    }).catch(error => {
        console.error('操作失败:', error);
        alert('操作失败: ' + error);
    });
})

//单独查找
document.querySelector('.byPersonalID').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    let searchID=+prompt('输入查找的ID');
    ajax('http://localhost:3000/students','GET').then((value)=>{ // 修正：将 ' GET' 改为 'GET'
        console.log(value);
        console.log('开始查询');//我在改bug
        const data=[];
        let i = 0;
        let n = 0;
        value.forEach(element => {
            console.log('第' + n + '次遍历');
            n++;
            if (element.id == searchID) { //因为这里的id是字符串所以数值相等即可
                data[i] = element;
                i++;
            }
        });

        if (data.length === 0) {
            alert('查无此人');
        }
        document.querySelector('tbody').innerHTML = data.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join('');
    }).catch(res=>{
        console.log('发生错误:'+res);
        alert('操作失败: ' + res);
    })
})

//按照名字查找
document.querySelector('.byName').addEventListener('click',function(){
    document.querySelector('.searchChoice').style.display='none';
    let searchName=prompt('输入查找的姓名');
    ajax('http://localhost:3000/students','GET').then((value)=>{ // 修正：将 ' GET' 改为 'GET'
        console.log(value);
        console.log('开始查询');//我在改bug
        const data=[];
        let i = 0;
        let n = 0;
        value.forEach(element => {
            console.log('第' + n + '次遍历');
            console.log(element.name);
            n++;
            if (element.name === searchName) { //因为这里的id是字符串所以数值相等即可
                data[i] = element;
                i++;
            }
        });

        if (data.length === 0) {
            alert('查无此人');
        }
        document.querySelector('tbody').innerHTML = data.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join('');
    }).catch(res=>{
        console.log('发生错误:'+res);
        alert('操作失败: ' + res);
    })
})


/* 修改数据 */
changed.addEventListener('click',function(){
    let inputID = +prompt('要修改学生学号');
    let inputName = prompt('要修改学生姓名');
    let inputChinese = prompt('要修改学生语文成绩');
    let inputMath = prompt('要修改学生数学成绩');
    let inputEnglish = prompt('要修改学生英语成绩');

    ajax('http://localhost:3000/students', 'GET').then((value) => {
        let newData = {}
        value.forEach(element => {
            if(element.id==inputID){
               newData= element;
            }
        }); //查找对应 ID 的学生

        if (!newData) {
            alert('查无此人');
            return Promise.reject('查无此人');//因为这里是在执行异步操作所以要返回promise提供后面的异步操作
        }

        newData.name = inputName || newData.name;
        newData.Chinese = inputChinese !== '' ? inputChinese : newData.Chinese; 
        newData.Math = inputMath !== '' ? inputMath: newData.Math; 
        newData.English = inputEnglish !== '' ? inputEnglish: newData.English; 
        newData.total = newData.Chinese + newData.Math + newData.English;

        // 发送 PUT 请求更新数据
        return ajax(`http://localhost:3000/students/${inputID}`, 'PUT', newData);
    }).then(updatedStudent => {
        console.log('修改成功:', updatedStudent);
        alert('修改成功');
        // 修改成功后，重新获取并显示所有学生数据
        return ajax('http://localhost:3000/students', 'GET');
    }).then(allStudents => {
        // 重新渲染表格
        document.querySelector('tbody').innerHTML = allStudents.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join('');
    }).catch(error => {
        console.error('操作失败:', error);
    });
})


/* 删除数据 */
deletes.addEventListener('click',function(){
    let inputID = prompt('要删除学生学号');
    console.log('已获取学号');
    ajax(`http://localhost:3000/students/${inputID}`,'DELETE').then((value)=>{
        console.log('已执行异步');
        alert('删除成功')
        return ajax('http://localhost:3000/students', 'GET')
    }).then((data)=>{
        //重新更新渲染
        console.log('执行渲染任务');
        document.querySelector('tbody').innerHTML = data.map(element => {
            return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.Chinese}</td>
                <td>${element.Math}</td>
                <td>${element.English}</td>
                <td>${element.total}</td>
            </tr> 
            `;
        }).join('');
    })
})



/* 开发问题总结 */
/* 
- 异步操作的理解 ：刚开始用原生 AJAX 的时候，遇到了 undefined 的问题，是因为 AJAX 是异步的，请求还没回来你就去拿结果了。后来咱们通过回调函数或者 Promise 的 .then() 来确保数据回来后再处理，就解决啦！
- 选择器和 HTML 元素的匹配 ：好几次报错都是因为 JavaScript 里的 document.querySelector 写法或者类名跟 HTML 里对不上，导致找不到元素（ null ）。所以写选择器的时候一定要仔细核对 HTML 里的 class 或 id 哦！
- 脚本加载时机 ：第一次 addEventListener 报错，是因为 JavaScript 脚本在 HTML 元素还没加载出来之前就运行了。把 <script> 标签放到 </body> 前面，就能保证元素都准备好了再执行脚本。
- HTTP 方法和 URL 的对应 ：比如 PUT 请求修改数据，URL 里必须带上要修改的资源的 ID ( /students/:id )，不然服务器不知道你要改谁，就会报 404。还有方法名拼写错误 ( DETELE vs DELETE ) 这种小细节也要注意。
- 数据格式和请求头 ：发送 POST 或 PUT 请求时，如果发送的是 JSON 数据，记得设置 Content-Type 请求头为 application/json ，并且用 JSON.stringify() 把 JavaScript 对象转换成 JSON 字符串再发送。
- Promise 的链式调用 ：在修改和删除功能里，咱们用 Promise 的 .then() 把获取数据、处理数据、发送请求、刷新页面这些步骤串起来，让异步操作的流程更清晰、更可靠。
- 循环和变量作用域 ：在按 ID 或姓名查找时，刚开始循环计数器和存放结果的数组索引在循环里被重置了，导致逻辑不对。把这些变量放到循环外面初始化就解决啦。
*/


