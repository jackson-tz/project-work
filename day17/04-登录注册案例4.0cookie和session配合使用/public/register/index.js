const {log} = console;
// 获取元let oUserName = document.querySelector("input[name=userName]");
// let oPassWord = document.querySelector("input[name=password]");
// let oRepassword = document.querySelector("input[name=repassword]");
// let userNameSpan = document.querySelector("#tip-userName");
// let passWordSpan = document.querySelector("#tip-password");
// let repasswordSpan = document.querySelector("#tip-repassword");
// let oSubmit = document.querySelector("input[type=submit]");

// 设置输入框最长可输入的字数
oUserName.maxLength = 16;
oPassWord.maxLength = 16;
oRepassword.maxLength = 16;
// 当失去焦点时判断用户名输入框中输入的内容
o_UserName();
//当失去焦点时判断密码框中输入的内容
o_PassWord();

// 确认密码框
oRepassword.oninput = function(e){
    const value = this.value.trim();
    if(!value) return;
    if(value === oPassWord.value.trim()) {
        repasswordSpan.textContent = "输入正确😊";
        repasswordSpan.style.color = "green";
    }else{
        repasswordSpan.textContent = "输入错误😑";
        repasswordSpan.style.color = "red";
    }
}

// 当点击登录按钮，判断输入框中的内容
oSubmit.onclick = function(e){
    if(!userNameSpan.style.color || !passWordSpan.style.color || !repasswordSpan.style.color) return e.preventDefault();
    
    if(!(userNameSpan.style.color === "green" && passWordSpan.style.color === "green" && repasswordSpan.style.color === "green")) e.preventDefault();

}