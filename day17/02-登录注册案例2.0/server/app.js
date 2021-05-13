(async function(){
    // 
    const express = require("express");
    const logicRouter = require("./router/logicRouters")
    const uiRouter = require("./router/uiRouters");
    // 引入cookie-parser
    const cookieParser = require("cookie-parser");
    const app = express();
    // const userModel = require("./db/model/index")
    await require("./db/condb")
    console.log("数据库连接成功")
    app.use(express.static("../public"));
    app.use(express.urlencoded({extended: true}));
    // 把解析cookie数据的中间件配置好了
    app.use(cookieParser())
    
    // 使用路由中间件
    app.use(logicRouter)
    app.use(uiRouter)
     // 配置ejs模板
     // 告诉express,当前我们服务中使用的是ejs这个模板引擎
    app.set("view engine","ejs");

    // 告诉express,我们的模板在那个文件夹下面
    // 所有的.ejs文件就是所谓的模板
    app.set("views", "../views/home" )
    app.listen(5000,(err)=>{
        if(err)console.log("服务器启动失败",err)
        else console.log("服务器启动成功")
    })
})();