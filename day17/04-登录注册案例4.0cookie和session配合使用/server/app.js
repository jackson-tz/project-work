(async function(){
    // 
    const express = require("express");
    const logicRouter = require("./router/logicRouters")
    const uiRouter = require("./router/uiRouters");
    // 引入cookie-parser
    const cookieParser = require("cookie-parser");
    // 引入
    var session = require("express-session");
    var MongoStore = require('connect-mongo')(session);

    const app = express();
    // const userModel = require("./db/model/index")
    await require("./db/condb")
    console.log("数据库连接成功")
    app.use(express.static("../public"));
    app.use(express.urlencoded({extended: true}));
    // 把解析cookie数据的中间件配置好了
    app.use(cookieParser())
    // 设置中间件
    app.use(session({
    name: 'id22',   //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true ,//是否在每次请求时重新保存session
    store: new MongoStore({
        url: 'mongodb://localhost:27017/test-app',
        touchAfter: 24 * 3600 // 24小时之内只修改一次
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000*60*3 // 这一条 是控制 sessionID 的过期时间的！！！
    },
    }));

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