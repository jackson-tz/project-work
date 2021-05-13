
// 利用await判断数据库是否连接成功
;(async function(){
    // 引入express
    const express = require("express");
    // 引入cookie
    const cookieParser = require("cookie-parser");
    // 引入express-session模块和connect-mongo模块
    const session = require("express-session");
    const MongoStore = require("connect-mongo")(session);
    // 接收引入router
    const logicRouters = require("./router/logicRouters");
    const uiRouter = require("./router/uiRouter");

    // 创建服务器
    const app = express();
    // 判断数据库是否连接成功
    await require("./db/condb/index");
    console.log("数据库连接成功");
    // 创建静态资源
    app.use(express.static("../public"))
    // 调用中间件
    app.use(express.urlencoded({extended: true}))
    // 使用cookie
    app.use(cookieParser());

    app.use(session({
        name: 'userid',   //设置cookie的name，默认值是：connect.sid
        secret: 'atguigu', //参与加密的字符串（又称签名）
        saveUninitialized: false, //是否在存储内容之前创建会话
        resave: true ,//是否在每次请求时，强制重新保存session，即使他们没有变化
        store: new MongoStore({
          url: 'mongodb://localhost:27017/sessions_container',
          touchAfter: 24 * 3600 //修改频率（例：//在24小时之内只更新一次）
        }),
        cookie: {
          httpOnly: true, // 开启后前端无法通过 JS 操作cookie
          maxAge: 1000*60 // 设置cookie的过期时间
        },
      }));


    // 使用路由器中间件
    app.use(logicRouters)
    app.use(uiRouter)

    
    // 配置ejs模板
    // 告诉express,当前我们服务器中使用的是ejs这个模板引擎
    app.set("view engine", "ejs");
    // 告诉express,我们定义的模板在哪个文件夹下面
    // 所有的.ejs文件就是所谓的模板
    app.set("views", "../views/home" )

    // 启动服务器
    app.listen(5000,(err)=>{
        if(err) console.log("启动服务器失败",err);
        else console.log("启动服务器成功")
    })
})();