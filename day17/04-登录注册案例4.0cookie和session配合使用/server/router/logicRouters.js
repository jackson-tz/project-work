// 引入express
const express = require("express");
// 创建路由器对象
const router = express.Router();
// 引入往数据库中添加数据的方法
const {registerUser} = require("../db/crud/register.js")
// 引入查找用户数据的方法
const {loginUser} = require("../db/crud/login.js")

// 利用创建的router对象配置路由
// 处理注册的逻辑
router.post("/register", async (request,response)=>{
    const {userName,password} = request.body;
    await registerUser(userName,password)
    response.send("注册成功,<a href='http://127.0.0.1:5000/login/index.html'>点击跳转登录界面</a>")
})

// 处理登录的逻辑
router.post("/login",async (request,response)=>{
    const {userName,password} = request.body;
    const user = await loginUser(userName,password);
    if(user){
        request.session.userId = user._id
        // 添加cookie
        // response.cookie("userId",user._id,{maxAge:1000*60*10})
        // 重定向，跳转新的页面
        // response.redirect("http://127.0.0.1:5000/home?_id=" + user._id)
        response.redirect("http://127.0.0.1:5000/home/"+user._id)
    }else{
        response.send("登录失败，用户名或密码错误,<a href='http://127.0.0.1:5000/login/index.html'>点击返回到登录页面</a>")
    }
})

module.exports = router;