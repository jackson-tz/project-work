const {log} = console;
(async function(){
// 引入express
const express = require("express");
// 引入cors
const cors = require("cors");
// 引入router
const router = require("./router/logicRouters")
// 判断数据库是否连接成功
await require("./db/condb");
log("数据库连接成功");
// 创建应用对象
const app = express();
// 用来处理post请求上传的数据
app.use(express.urlencoded({extended: true}));
// 用来实现跨域资源共享
app.use(cors())  

app.use(router)
//配置路由（接口）


// 启动服务器对象
app.listen(5000,(err)=>{
    if(err) log("服务器启动失败",err);
    else log("服务器启动成功")
})
})();