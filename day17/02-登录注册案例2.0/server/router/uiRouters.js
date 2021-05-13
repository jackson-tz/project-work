const express = require("express");
const {loginUserById} = require("../db/crud/login")


// 创建路由对象
const uiRouter = express.Router();
uiRouter.get("/home/:_id",async (request,response)=>{
    // const _id = request.query._id
    console.log(request.params)
    const {_id} = request.params
    const user = await loginUserById(_id)
    response.render("index", { username: user.userName })
})

uiRouter.get("/detail",(request,response)=>{
    if(request.cookies.userId){
        //说明之前登录过,登录过就有cookie信息
        response.render("detail",{})
    }else{
        // 说明之前没登录或退出了
        response.redirect("http://127.0.0.1:5000/login/index.html")
    }
})

module.exports = uiRouter;
