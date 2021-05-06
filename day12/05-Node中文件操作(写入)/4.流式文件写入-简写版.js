const fs = require('fs');

const ws = fs.createWriteStream("./music1.mp3");
const rs = fs.createReadStream("./music.mp3");

//向目标文件中写入的方法
// ws.write("123")

rs.pipe(ws)

// 监听写入和读取流的事件
rs.on('open', () => {
    // 当读取流打开的时候,这个回调会被调用
    console.log('读取流打开了')
  })
  rs.on('close', () => {
    // 当读取流关闭的时候,这个回调会被调用
    // 注意:读取完毕之后,读取流会自动关闭
    console.log('读取流关闭了')
  
    // 读取流关闭的时候,关闭写入流
    ws.end()
  })
  
  ws.on('open', () => {
    // 当写入流打开的时候,这个回调会被调用
    console.log('写入流打开了')
  })
  ws.on('close', () => {
    // 当写入流关闭的时候,这个回调会被调用
    // 注意: 写入流不会自动关闭,需要开发者手动关闭
    console.log('写入流关闭了')
  })
  