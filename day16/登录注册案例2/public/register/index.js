// 获取元素
var oUserName = document.querySelector("input[name=userName]")
var oPassword = document.querySelector("input[name=password]")
var orePassword = document.querySelector("input[name=repassword]")
var oUserNameSpan = document.querySelector("#dit-userName")
var oPasswordSpan = document.querySelector("#dit-passWord")
var orePasswordSpan = document.querySelector("#dit-repassWord")
var oSubmit = document.querySelector("button[type=submit]")

// 设置输入框可输入的长度
oUserName.maxLength = 16;
oPassword.maxLength = 16;
orePassword.maxLength = 16;
// 判断用户名输入框是否输入规范
o_UserName()
// 判断密码框的输入是否规范
o_Password()
// 判断确认密码框的输入是否规范
orePassword.oninput = function (){
    const value = this.value.trim();
    if(!value) return;
    if(value === oPassword.value.trim()){
        orePasswordSpan.textContent = "输入正确😊";
        orePasswordSpan.style.color = "green"
    }else{
        orePasswordSpan.textContent = "输入失败😐";
        orePasswordSpan.style.color = "red"
    }
}
// 点击oSubmit登录按钮，判断用户名和密码是否输入正确
oSubmit.onclick = function(e){
    if(!oUserNameSpan.style.color || !oPasswordSpan.style.color || !orePasswordSpan.style.color) return e.preventDefault();
    if(!(oUserNameSpan.style.color === "green" && oPasswordSpan.style.color === "green" && orePasswordSpan.style.color === "green")) e.preventDefault();
}
