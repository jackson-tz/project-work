// 引入model对象
const userModel = require("../model/index");

function registerUser(userName,password){
    return userModel.findOne({userName,password})
}

module.exports.registerUser = registerUser;