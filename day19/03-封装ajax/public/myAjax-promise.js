// 封装ajax函数
// 参数传入一个对象
function myAjax(options){
   return new Promise((resolve,reject)=>{
        // 判断传入的参数是否是一个对象
        if(!options || Object.prototype.toString.call(options).slice(8,-1).toLowerCase() !== "object") return;
        // 结构传进来的参数
        let {
            url, // 要请求的地址
            data, // 请求时上传的数据
            type = "get", // 请求的方式，默认为get
            dataType = "json", // 服务器返回的格式,默认为json
            timeOut, // 超时时间,单位毫秒 （当访问时间超过时，则停止访问服务器）
        } = options
        // 判断是否传入url地址
        if(!url) return;
        // 创建xhr对象
        const xhr = new XMLHttpRequest();
        // 获取data 数据，并且把它转换为 "键=值&键=值..." 的形式 （封装一个函数在此调用并接收）
        let paramStr = obj2str(data);
        // 调用open方法，设置请求方式，和请求的url地址
        // 判断请求的方法，如果是get请求，数据以查询字符串的形式拼接在url上
        if(type === "get"){
            url += "?" + paramStr;
            paramStr = null;
        }
        xhr.open(type,url);
        // 设置请求头，如果是get请求,则不设置（规定数据在请求主体上的格式）
        if(type === "post") xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        // 设置请求主体，并且发出请求，当请求方式为get请求时，xhr.send(null);
        xhr.send(paramStr);
        // 监听readyState的变化 readyState的取值不同，含义不同
        // 0 ：（未初始化）对象已经创建，但在调用open()方法之前
        // 1 ：（载入）已经调用open()方法，但还未发出请求
        // 2 ：（载入完成）请求已经发送完
        // 3 : （交互）可以接收到部分响应内容
        // 4 ：（完成）已经接收到全部响应内容，并且连接已经关闭
        xhr.onreadystatechange = function(){
            // 判断请求是否完成
            if(xhr.readyState === 4){
                // 判断请求是否成功
                if(xhr.status === 200){
                    let value 
                    if(dataType === "json"){
                        // console.log(xhr.responseText)
                        value = JSON.parse(xhr.responseText)
                        // 获取到服务器响应发出来的数据
                        resolve(value)
                    }else{
                        resolve(xhr.responseText)
                    }  
                }else{
                    reject(xhr)
                }
            }
        }   
    })
}

// 封装一个函数将data 数据转换为 "键=值&键=值..." 的形式
function obj2str(obj){
    // 判断传入的数据是以对象的形式传入
    if(!obj || Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() !== "object") return;
    // 声明一个数组，遍历对象obj
    const arr = [];
    for(let key in obj){
        // 利用模板字符串拼接
        arr.push(`${key}=${obj[key]}`);
    }
    // 将得到的新数组转换成字符串并return出去
    return arr.join("&")
} 