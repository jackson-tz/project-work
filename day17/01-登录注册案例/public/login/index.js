const {log} = console;
// 获取元素
// const oUserName = document.querySelector("input[name=userName]");
// const oPassWord = document.querySelector("input[name=password]");
// const userNameSpan = document.querySelector("#tip-userName");
// const passWordSpan = document.querySelector("#tip-password");
// const oSubmit = document.querySelector("input[type=submit]");

// 设置输入框最长可输入的字数
console.log(1)
oUserName.maxLength = 16;
oPassWord.maxLength = 16;
// 当失去焦点时判断用户名输入框中输入的内容
o_UserName()
//当失去焦点时判断密码框中输入的内容
o_PassWord()

// 当点击登录按钮，判断输入框中的内容
oSubmit.onclick = function(e){
    // 点击登录按钮后，清空表单输入框的内容
    // oUserName.value = "";
    // oPassWord.value = "";
    if(!userNameSpan.style.color || !passWordSpan.style.color) return e.preventDefault();
    
    if(!(userNameSpan.style.color === "green" && passWordSpan.style.color === "green")) e.preventDefault();

    

}