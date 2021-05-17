// 引入express
const express = require("express");
// 创建app对象
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"))

app.post("/xxx",(request,response)=>{
    let arr = ["zs","ls","ww"]
    // console.log(request.body);
    const user = request.body.name;
    // console.log(user)
    // console.log(arr.includes(user))
    arr.includes(user)
    ?response.send("不可用")
    :response.send("可用")

})

// 启动服务器
app.listen(5000,(err)=>{
    if(err) console.log("启动服务器失败",err);
    else console.log("服务器启动成功")
})