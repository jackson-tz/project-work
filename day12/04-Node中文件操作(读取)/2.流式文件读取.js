/* 
    流式文件读取：
        fs.createReadStream(path[,options])
            -path: 要读取的文件路径 + 文件名 + 文件后缀
            -options: 配置对象
                -flag：打开文件要进行的操作，默认值为 "r"
                    1) "w" : 写入（如果文件不存在，则创建文件，若存在，则替换）
                    2) "r" : 读取（如果文件不存在，会出现错误）
                    3) "a" : 追加（如果文件不存在，则创建文件）
                -mode: 文件的权限限制，默认值：0o666;
                    1) 0o111 : 文件可被执行的权限
                    2) 0o222 : 文件可被写入的权限
                    3) 0o444 : 文件可被读取的权限
                -encoding：编码 默认值为 "utf-8"
                -fd: 文件的描述（文件的内部编码），默认值为null
                -autoClose：自动关闭，当写入数据完毕后，自动关闭操作的文件，默认值是true
                -start：读取文件开始的位置，默认是0
                -end：读取文件结束的位置，默认是highWaterMark
                -highWaterMark：每次读取数据的大小（水管的粗细），默认值64（字节byte）*1024
*/

const fs = require("fs")
const rs = fs.createReadStream("./test.txt",{
    highWaterMark: 66,
    start: 6,
})
// 读取文件中的数据
// on 里面的传的是data,表示监听这个文件读取的过程,每次读到文件中的一部分信息,就调用一下后面的回调函数
rs.on("data",(data)=>{
    console.log(data.toString())
})