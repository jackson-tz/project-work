//引入mongoose
const mongoose = require("mongoose");

//连接数据库,并导出promise对象
module.exprots = mongoose.connect("mongodb://127.0.0.1:27017/day14");