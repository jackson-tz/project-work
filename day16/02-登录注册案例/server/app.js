const express = require("express");
const app = express();

app.use(express.static("../public"))

app.listen(5000,(err)=>{
    if(err)console.log("服务器启动失败",err)
    else console.log("服务器启动成功")
})