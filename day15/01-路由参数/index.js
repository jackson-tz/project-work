const express = require("express");
const app = express();
app.get("/getUsers/:page/:pageSize",(request,response)=>{
    console.log(request.params)
    response.send("绿苹果")
})
app.get("/",(request,response)=>{
    console.log(request.get("content-type"))
    console.log(request.query  )
    
    response.sendFile(__dirname + "/test.text")

    // response.send("绿苹果")
})

app.post("/getUsers/:id",(request,response)=>{
    console.log(request.params)
    console.log(request.get("Content-Type"))
    // response.send("post请求")
})

app.listen(5000,(err)=>{
    if(err)console.log("服务器没有启动成功",err);
    else console.log("服务器启动成功了")
})