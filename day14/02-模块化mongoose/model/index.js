//引入mongoose
const mongoose = require("mongoose");

//创建Schema对象
const Schema = mongoose.Schema
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
        default: "男"
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{
    collection: "user"
});
//创建model对象
const userModel = mongoose.model("user",userSchema)

//由于在数据库的增删改查js文件中要使用model对象，所以要将这个对象导出
module.exports = userModel;