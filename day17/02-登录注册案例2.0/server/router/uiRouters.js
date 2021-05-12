const express = require("express");



// 创建路由对象
const uiRouter = express.Router();
// console.log(users.userName)
uiRouter.get("/home",async (request,response)=>{
    // const {userName,password} = request.body;
    // const user = await loginUser(userName,password);
    response.render("index", { username: "user.userName" })
})

module.exports = uiRouter;
