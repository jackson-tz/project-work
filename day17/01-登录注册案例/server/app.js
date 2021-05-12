(async function(){
    // 
    const express = require("express");
    const logicRouter = require("./router/logicreters")
    const app = express();
    
    await require("./db/condb")
    console.log("数据库连接成功")
    app.use(express.static("../public"));
    app.use(express.urlencoded({extended: true}));

    app.use(logicRouter)
   
    app.listen(5000,(err)=>{
        if(err)console.log("服务器启动失败",err)
        else console.log("服务器启动成功")
    })
})();