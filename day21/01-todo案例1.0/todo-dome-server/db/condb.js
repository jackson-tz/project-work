// 引入mongoose
const mongoose = require("mongoose");
// 连接数据库，并把返回的promise对象导出
module.exports = mongoose.connect("mongodb://127.0.0.1:27017/todoList",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})