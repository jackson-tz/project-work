const {log} = console;
(async function(){
// 引入express
const express = require("express");
// 判断数据库是否连接成功
await require("./db/condb");
log("数据库连接成功");
// 创建应用对象
const app = express();
// 引入router
const router = require("./router/logicRouters")

app.use(router)
//配置路由（接口）


// 启动服务器对象
app.listen(5000,(err)=>{
    if(err) log("服务器启动失败",err);
    else log("服务器启动成功")
})
})();