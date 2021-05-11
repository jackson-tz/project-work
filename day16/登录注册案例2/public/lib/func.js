// 获取元素
var oUserName = document.querySelector("input[name=userName]")
var oPassword = document.querySelector("input[name=password]")
var orePassword = document.querySelector("input[name=repassword]")
var oUserNameSpan = document.querySelector("#dit-userName")
var oPasswordSpan = document.querySelector("#dit-passWord")
var orePasswordSpan = document.querySelector("#dit-repassWord")
var oSubmit = document.querySelector("button[type=submit]")

// 判断用户名输入框是否输入规范
function o_UserName(){
    oUserName.oninput = function(e){
        const value = this.value.trim();
        if(!value) return;
        const reg = /(\w+){8,16}/
        if(reg.test(value)){
            oUserNameSpan.textContent = "输入正确😊";
            oUserNameSpan.style.color = "green"
        }else{
            oUserNameSpan.textContent = "输入错误😐";
            oUserNameSpan.style.color = "red"
        }
    }
}

// 判断密码框的输入是否规范
function o_Password(){
    oPassword.oninput = function(e){
        const value = this.value.trim();
        if(!value) return;
        const reg = /^[A-Z]+\w{7,15}$/
        if(reg.test(value)){
            oPasswordSpan.textContent = "输入正确😊";
            oPasswordSpan.style.color = "green"
        }else{
            oPasswordSpan.textContent = "输入错误😐";
            oPasswordSpan.style.color = "red"
        }
    }
}