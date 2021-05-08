// 1.引入http模块
const http = require("http");
const queryString = require("querystring")

// 2.搭建服务器
const server = http.createServer((request,response)=>{
    const str = request.url
    let arr = str.split("?")
    let res = queryString.parse(arr[1])
    console.log(res)
    response.setHeader("content-type","text/html;charset=utf-8");
    response.end("服务器相应传过来的数据")
})


// 3.启动服务器
server.listen(5000,(err)=>{
    if(err)console.log("服务器启动失败",err)
    else console.log("server服务器启动成功")
})