// 引入express
const express = require("express");
// 引入操作数据库的函数
const {findTodoAll} = require("../db/crud")
// 创建router对象
const router = express.router();

// 查找数据库所有数据操作
router.get('/findTodo',async (req,res)=>{
    // 设置跨域访问
    const { callback } = req.body;
    // 查找数据库的所有数据，封装函数
    const todoList = await findTodoAll();
    // 将获取的数据转化成json类型的字符串
    const todoStr = JSON.stringify(todoList);
    // 利用字符串模板拼接
    const cbStr = `${callback}(${todoStr})`
    res.send(cbStr)
})

// 导出router
module.exports = router;
