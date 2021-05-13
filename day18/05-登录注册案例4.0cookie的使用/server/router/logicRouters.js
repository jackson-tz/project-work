// 引入express
const express = require("express");
// 引入操作数据库的函数
const {loginUser} = require("../db/crud/login");
const {registerUser} = require("../db/crud/register");
// 创建一个router对象
const router = express.Router();
// 使用中间件，使得res.body能够获得post请求上传的数据
router.use(express.urlencoded({extended: true}));

// 注册账户操作
router.post("/register",async (request,response)=>{
    // 函数结构获取表单上传的数据
    const {userName,password} = request.body;
    // 调用该函数，向数据库中添加数据
    await registerUser(userName,password);
    // 响应请求
    response.send("注册成功,<a href='http://127.0.0.1:5000/login/index.html'>点击跳转到登录界面</a>")
})

// 登录用户操作
router.post("/login",async (request,response)=>{
    // 获取post请求上传的数据
    const {userName,password} = request.body;
    // 调用该函数，在数据库中查找是否有该数据
    const user = await loginUser(userName,password);
    // response.cookie("userId",user._id)
    
    // 判断user是否存在
    if(user){
        request.session.userId = user._id
        console.log(request.session.userId )
        // 登录成功，重定向，将页面跳转到主页
        response.redirect("http://127.0.0.1:5000/home/"+user._id)
    }else{
        // 登录失败，响应服务器
        response.send("登录失败，用户名或密码错误，<a href='http://127.0.0.1:5000/login/index.html'>点击返回登录界面</a>")
    }

})

// 导出Router对象
module.exports = router;