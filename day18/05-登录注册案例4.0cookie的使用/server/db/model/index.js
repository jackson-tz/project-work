// 引入mongoose
const mongoose = require("mongoose");
// 创建Schema对象
const Schema = mongoose.Schema;
// 设置传入数据的规则
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

// 创建model对象并且把它导出
module.exports = mongoose.model("users",userSchema);
