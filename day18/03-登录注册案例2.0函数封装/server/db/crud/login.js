// 引入model对象
const userModel = require("../model/index");

function loginUser(userName,password){
    return userModel.findOne({userName,password})
}

module.exports.loginUser = loginUser;