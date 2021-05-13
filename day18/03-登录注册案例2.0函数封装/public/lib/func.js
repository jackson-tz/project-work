const oUserName = document.querySelector("input[name=userName]");
const oPassWord = document.querySelector("input[name=password]");
const oRepassword = document.querySelector("input[name=repassword]");
const userNameSpan = document.querySelector("#tip-userName");
const passWordSpan = document.querySelector("#tip-password");
const repasswordSpan = document.querySelector("#tip-repassword");
const oSubmit = document.querySelector("input[type=submit]");

// 当失去焦点时判断用户名输入框中输入的内容
function o_UserName(){
    oUserName.oninput = function(e){
        const value = this.value.trim();
        if(!value) return;
        let reg = /^\w{8,16}$/;
        if(reg.test(value)) {
            userNameSpan.textContent = "输入正确😊";
            userNameSpan.style.color = "green";
        }else{
            userNameSpan.textContent = "输入错误😑";
            userNameSpan.style.color = "red";
        }
    }
}

//当失去焦点时判断密码框中输入的内容
function o_PassWord(){
    oPassWord.oninput = function(e){
        const value = this.value.trim();
        if(!value) return;
        let reg = /^[A-Z]+\w{7,15}$/;
        if(reg.test(value)) {
            passWordSpan.textContent = "输入正确😊";
            passWordSpan.style.color = "green";
        }else{
            passWordSpan.textContent = "输入错误😑";
            passWordSpan.style.color = "red";
        }
    }
}