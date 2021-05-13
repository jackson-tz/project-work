// 引入mongoose
const mongoose = require("mongoose");

//连接数据库，并且导出返回的promise对象
module.exports = mongoose.connect("mongodb://127.0.0.1:27017/day17_test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

