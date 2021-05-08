//引入http模块
const http = require("http")

const queryString = require("querystring");

//创建服务器对象
const server = http.createServer((request, response)=>{
    const str = request.url;
    let arr = str.split("?");
    let res = queryString.parse(arr[1])
    console.log(res);
    response.setHeader("content-type","text/html;charset=UTF-8")
    response.end('服务器响应传过来的数据')
})

//开启服务器
server.listen(5000,(err)=>{
    if(err) console.log("服务器启动失败",err)
    else console.log("服务器启动成功")
})