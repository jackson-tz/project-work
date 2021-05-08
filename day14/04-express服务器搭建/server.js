const {log} = console;
//1.引入express
const express = require("express");
//2.创建应用对象
const app = express();

// 处理请求
// app.get专门处理get请求，只要是get请求，并且路径是指定的这一个，这个回调就会被调用
app.get("/",(request,response)=>{
    log(request.query)
    response.send("你好！")
})

app.get("/abc",(request,response)=>{
    log("abc")
})

// app.post专门处理post请求，只要是post请求，并且路径是指定的这一个，这个回调函数就会被调用
app.post("/",(request,response)=>{
    log(request.query);
    response.send("<h1>你好！</h1>")
})



//3.启动服务器
app.listen(5000,(err)=>{
    if(err) log("服务器启动失败",err)
    else log("express服务器启动成功")
})
