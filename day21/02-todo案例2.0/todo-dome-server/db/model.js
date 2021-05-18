// 引入mongoose
const mongoose = require("mongoose");
// 创建Schema对象
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    todoName: {
        type: String,
        required: true,
        unique: true,
    },
    isDone: {
        type: String,
        required: true,
        default: false,
    }
})

// 创建model对象
const todoModel = mongoose.model("todos",todoSchema);
// 导出model对象
module.exports = todoModel;