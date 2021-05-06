/* 
    简单文件写入：fs.writeFile(file,data[,options],callback)
        -file: 要写入的文件路径 + 文件名 + 文件后缀名
        -data: 要写入文件的数据
        -options: 配置对象
            -flag：打开文件要进行的操作，默认值为 "w";
                1) "w" : 写入
                2) "r" : 读取
                3) "a" : 追加
            -mode：文件的权限控制，默认值为：0o666;
                1) 0o111 : 文件可被执行权限
                2) 0o222 : 文件可被写入权限
                3) 0o444 : 文件可被读取权限
            -encoding：编码 默认值："utf-8";
        -callback：回调函数
*/

const fs = require("fs");
fs.writeFile(
"./test.txt",
"添加的内容",
{
    flag : 'a'
},
(err)=>{
    console.log(err)
}
)

