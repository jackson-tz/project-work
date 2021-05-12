// 利用await判断数据库是否连接成功
;(async function(){
    // 引入express
    const express = require("express");
    // 引入model对象
    const userModel = require("./db/model");
    // 创建服务器
    const app = express();
    // 判断数据库是否连接成功
    await require("./db/condb/index");
    console.log("数据库连接成功");
    // 创建静态资源
    app.use(express.static("../public"))
    // 调用中间件
    app.use(express.urlencoded({extended: true}))

    // 进行请求操作
    // 注册操作
    app.post("/register",async (request,response)=>{
        // 获取到表单上传的数据
        const {userName,password} = request.body;
        // 将获取的数据创建并插曲到数据库中
        await userModel.create({
            userName,
            password
        })
        response.send("注册成功,<a href='http://127.0.0.1:5000/login/index.html'>点击跳转到登录界面</a>")
    })

    // 登录操作
    app.post("/login", async (request,response)=>{
        // 获取表单上传的数据
        const {userName,password} = request.body;
        console.log(userName,password)
        // 在数据库中查找是否用该用户
        let user = await userModel.findOne({userName,password})
        console.log(user)
        if(user){
            response.redirect("http://127.0.0.1:5000/home/index.html")
        }else{
            response.send("登录失败，用户名或密码错误,<a href='http://127.0.0.1:5000/login/index.html'>点击返回登录界面</a>")
        }
    })
    
    // 启动服务器
    app.listen(5000,(err)=>{
        if(err) console.log("启动服务器失败",err);
        else console.log("启动服务器成功")
    })
})();