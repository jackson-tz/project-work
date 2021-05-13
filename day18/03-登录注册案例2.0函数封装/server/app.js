// 利用await判断数据库是否连接成功
;(async function(){
    // 引入express
    const express = require("express");
    // 接收引入router
    const logicRouters = require("./router/logicRouters");

    // 创建服务器
    const app = express();
    // 判断数据库是否连接成功
    await require("./db/condb/index");
    console.log("数据库连接成功");
    // 创建静态资源
    app.use(express.static("../public"))
    // 调用中间件
    app.use(express.urlencoded({extended: true}))

    // 使用路由器中间件
    app.use(logicRouters)
    
    // 启动服务器
    app.listen(5000,(err)=>{
        if(err) console.log("启动服务器失败",err);
        else console.log("启动服务器成功")
    })
})();