const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.post("/xxx",(req,res)=>{
    console.log(req.body);
    res.send({name:"zs"})
})

app.get("/xxx",(req,res)=>{
    console.log(req.query);
    res.send({name:"zs"})
})

app.listen(5000,(err)=>{
    if(err) console.log("服务器启动失败",err);
    else console.log("服务器启动成功")
})