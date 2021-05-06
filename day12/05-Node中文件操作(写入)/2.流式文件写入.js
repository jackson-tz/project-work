const fs = require('fs');

const ws = fs.createWriteStream("./music1.mp3");
const rs = fs.createReadStream("./music.mp3");

//向目标文件中写入的方法
// ws.write("123")

rs.on("data",(data)=>{
    ws.write(data)
})