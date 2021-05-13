// 引入express
const { request, response } = require("express");
const express = require("express");
// 引入操作数据库的函数
const {loginUserById} = require("../db/crud/login")
// 创建router对象
const router = express.Router();

// 
router.get("/home/:_id",async (request,response)=>{
    
        const {_id} = request.params;
        let user = await loginUserById(_id)
        response.render("index",{userName: user.userName})
})

router.get("/detail",(request,response)=>{
    // console.log(request.cookies.userId)
    if(request.session.userId){
        response.render("detail",{});
    }else{
        response.redirect("http://127.0.0.1:5000/login/index.html")
    }

})
module.exports = router;