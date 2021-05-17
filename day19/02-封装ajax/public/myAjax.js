// 封装一个自己的ajax函数
function myAjax(option){
    // 判断传进来的参数是否是一个对象
    if(!option || typeof option !== "object") return;
    // 结构对象得到参数传进来的值,给type设置一个默认值
    let {
        url,
        type="get",
        data,
        success,
        error,
        complete,
        beforeSend,
    } = option;
    // 判断是否传url
    if(!url) return;

    // 创建一个xhr对象
    const xhr = new XMLHttpRequest();
    // 将传进来的data数据转化成"键=值&键=值..."形式的字符串
    let paramStr = obj2str(data);

    // 调用open方法
    // 判断使用的是那种请求
    // if(type === "get"){
    //     xhr.open(type , url+"?"+paramStr);
    // }else{
    // xhr.open(type , url);
    // }
    if(type === "get"){
        url += "?" + paramStr
        paramStr = null;
    }
    xhr.open(type,url);

    // 设置请求头
    if(type === "post") 
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

    // 设置请求主体，并且发出请求
    // if(type === "get"){
    //     xhr.send(null)
    // }else{
    //     xhr.send(paramStr)
    // }
    const isSend = beforeSend && beforeSend()
    if(isSend === false) return;
    xhr.send(paramStr);

    // 监听readyState的变化
    xhr.onreadystatechange = function(){
        // 判断请求是否完成
        if(xhr.readyState === 4){
            complete && complete()
            // 判断请求是否成功
            if(xhr.status === 200){
                success && success(xhr.responseText);
            }else{
                error && error(xhr);
            }
        }
    }

}


// 封装一个方法，将对象转换成"键=值&键=值..."形式的字符串
function obj2str(obj){
    // 判断obj是否是一个对象
    if(!obj || typeof obj !== "object") return;
    let arr = [];
    // 遍历对象
    for(var key in obj){
        // 字符串拼接
        arr.push(`${key}=${obj[key]}`) 
    }
    // 将得到的字符串返回
    return arr.join("&");
}
