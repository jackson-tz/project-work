/* 
    Node中文件读取：
        fs.readFile(path[,options],callback)
            -path: 要读取文件的路径+文件名+文件后缀
            -options: 配置对象
                encoding: 编码，默认是："utf8"
                flag: 打开文件要进行的操作，默认值：'r'
                        'w' : 写入（如果文件不存在，创建文件，存在时，替换）；
                        'r' : 读取（如果文件不存在，则会出现异常）；
                        'a' : 追加（如果文件不存在，则创建文件）；
            -callback: 回调函数
                        -参数一err：错误
                        -参数二data：缓冲区中的数据

*/

//fs模板是node中的内置模块，这个模块用来读写文件，由于是内置模块，可以不用下载，但需要引入
const fs = require("fs");
fs.readFile("./test.txt",(err,data)=>{
    console.log(err,data)
    console.log(data.toString())
});

//回调函数异步执行
console.log("hh");