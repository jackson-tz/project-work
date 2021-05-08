// 引入express
const express = require("express");

// 创建应用对象
const app = express();

// 处理请求
app.get("/",(request,response)=>{
    console.log(request.query)
    response.send("中文")
})

app.post("/",(request, response)=>{
    console.log(request.query)
    response.send("<h1>接收到post请求</h1>")
})
// 启动服务器
app.listen(5000,(err)=>{
    if(err) console.log("服务器启动失败",err)
    else console.log("服务器启动成功")
})