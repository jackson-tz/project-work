const {log} = console;
const express = require("express");
const app = express();

// 创建静态资源文件夹
app.use(express.static("../public"))

app.listen(5000,(err)=>{
    if(err) log("服务器启动失败",err);
    else log("服务器启动成功");
})