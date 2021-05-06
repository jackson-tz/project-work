/* 
    buffer缓冲器：
        -1.Buffer对象用来表示一个固定长度的字节序列，用于储存数据（储存的全部是二进制的数据）（用来接收任何数据）
        -2.Buffer的效率很高，储存和读写的速度都很快，本质就是对内存的直接操作（RAM(内存)和ROM(硬盘)）
        -3.Buffer的大小一旦确定就不可改变
        -4.每个元素占用的内存空间是一个字节
        -5.Buffer是node中的核心模块，无需下载、引入，直接俄使用
*/

const buffer1 = new Buffer(10);//不推荐使用

//1.Buffer.alloc()：更安全，但速度稍慢一些
const buffer2 = Buffer.alloc(10);
//2.Buffer.allocUnsafe()：速度快，但相比于第一种，更不安全
const buffer3 = Buffer.allocUnsafe(10);
//3.Buffer.from(),将其它类型值转换为二进制,储存在一个Buffer对象中
const buffer4 = Buffer.from("abcdefg");// 一个英文字母占一个字节
const buffer5 = Buffer.from("你好");// 一个汉字占三个字节

console.log(buffer1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buffer2); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buffer3); // <Buffer 7c 69 00 00 7c 69 00 00 03 00>
console.log(buffer4); // <Buffer 61 62 63 64 65 66 67>
console.log(buffer5); // <Buffer e4 bd a0 e5 a5 bd>
