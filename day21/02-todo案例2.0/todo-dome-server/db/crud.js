// 引入model对象
const todoModel = require("./model");

// 封装一个函数操作数据库，查找todo所有的数据；
function findTodoAll(){
    return todoModel.find()
}

// 添加数据的方法
function addTodofn(document){
    return todoModel.create(document)
}

// 更新数据方法
function updateTodosfn(ids, isDone){
    return todoModel.updateMany({_id: {$in: ids}},{$set:{isDone: isDone}})
}

// 删除数据的方法
function daleteTodofn(ids){
    return todoModel.deleteMany({_id:{$in: ids}})
}


// 将操作数据可的方法导出
module.exports.findTodoAll = findTodoAll;
module.exports.addTodofn = addTodofn;
module.exports.updateTodosfn = updateTodosfn;
module.exports.daleteTodofn = daleteTodofn;