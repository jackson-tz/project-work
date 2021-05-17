// 引入model对象
const todoModel = require("./model");

// 封装一个函数操作数据库，查找todo所有的数据；
function findTodoAll(){
    return todoModel.find()
}

// 将操作数据可的方法导出
module.exports.findTodoAll = findTodoAll;