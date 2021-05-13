const userModel = require("../model/index");
function loginUser(userName,password){
    return userModel.findOne({userName,password})
}

function loginUserById(_id){
    return userModel.findOne({_id})
}
module.exports.loginUser = loginUser;
module.exports.loginUserById = loginUserById;