// 引入model对象
const userModel = require("../model/index");

function registerUser(userName,password){
    return userModel.create({
        userName,
        password
    })
}

module.exports.registerUser = registerUser;

