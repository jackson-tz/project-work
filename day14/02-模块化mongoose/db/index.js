//引入mongoose
const mongoose = require("mongoose");

//连接数据库，返回一个promise
//因为后面的代码是否执行取决于数据库是否连接成功，将返回的promise导出
module.exports = mongoose.connect("mongodb://127.0.0.1:27017/day14",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


