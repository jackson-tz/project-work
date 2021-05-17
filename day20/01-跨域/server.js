// 引入express
const express = require("express");
// 创建应用对象
const app = new express();
// 设置静态资源
app.use(express.static("./public"));
// 使用中间件，使post请求能够获得请求时上传的数据
app.use(express.urlencoded({extended: true}));
app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*')
    next();
})


// get请求操作
app.get("/test",(req,res)=>{
    let callback = req.query.callback
    const arr = ["a","b","c"]
    let arrStr = JSON.stringify(arr);
    console.log(`${callback}(${arrStr})`) // 'fn(["a","b","c"])'
    res.send(`${callback}(${arrStr})`)
})

// post请求操作
app.post("/test",(req,res)=>{
    res.send("ok")
})


// 启动服务器
app.listen(5000,(err)=>{
    if(err) console.log("服务器启动失败",err);
    else console.log("服务器启动成功")
})