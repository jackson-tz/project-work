// 引入express
const express = require("express");
// 引入操作数据库的函数
const {findTodoAll, addTodofn, updateTodosfn, daleteTodofn} = require("../db/crud")
// 创建router对象
const router = express.Router();

// 查找数据库所有数据的接口
router.get('/findTodo',async (req,res)=>{
    // 设置跨域访问
    const { callback } = req.query;
    // 查找数据库的所有数据，封装函数
    const todoList = await findTodoAll();
    // 将获取的数据转化成json类型的字符串
    const todoStr = JSON.stringify(todoList);
    // 利用字符串模板拼接
    const cbStr = `${callback}(${todoStr})`
    // console.log(cbStr)
    res.send(cbStr)
})

// 新增数据的接口
router.post("/addTodo",async (req,res)=>{
    // 获取用户上上传的数据
    const { todoName } = req.body;
    // 将任务名上传到数据库
    await addTodofn({todoName})
    // 由于添加完成之后，前端还是要更新列表，所以需要添加之后的最新数据，然后拼接，响应给浏览器
    const todoList = await findTodoAll()
    // 将数据响应给浏览器
    res.send(todoList);

})

// 更新数据接口
router.post("/updateTodos",async (req,res)=>{
    // 由于这个接口，用于更新一条或多条，所以上传的数据要是一个数组，里面存储了所有要修改的数据id。即便只修改一条,也必须是一个数组，数组中存放了一个id
    let {ids,isDone} = req.body;
    // 要把拿到的ids的字符串转换成json对象
    ids = JSON.parse(ids);
    // 调用更该数据库的函数
    await updateTodosfn(ids,isDone);
    // 由于更改数据完成之后，前端还是要更新列表，所以需要更改之后的最新数据，然后拼接，响应给浏览器
    const todoList = await findTodoAll()
    // 将数据响应给浏览器
    res.send(todoList);
})

// 删除数据的接口
router.post("/deleteTodos",async (req,res)=>{
    // 接收用户上传的要删除的数据
    let { ids } = req.body;
    // 要把拿到的ids的字符串转换成json对象
    ids = JSON.parse(ids)
    // 调用删除数据库的函数
    await daleteTodofn(ids);
    // 由于删除数据完成之后，前端还是要更新列表，所以需要删除之后的最新数据，然后拼接，响应给浏览器
    const todoList = await findTodoAll()
    // 将数据响应给浏览器
    res.send(todoList);

})

// 导出router
module.exports = router;
