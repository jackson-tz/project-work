// 引入mongoose
const mongoose = require("mongoose");

//创建Schema对象
const Schema = mongoose.Schema;
//设置规则
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        default: "男",
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{collection: "user"})//设置集合名

//创建model对象
const userModel = mongoose.model("user",userSchema)
//导出userModel对象
module.exports = userModel;