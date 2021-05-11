const {log} = console;

// log(/\d/.test(123))
// log(/\D/.test(123))
// log(/\w/.test(123))
// log(/\W/.test(123))

// log(/a/.test('a1235674571mszvch'))

// log("1\r2")

// 提取 字符串.match(/正则表达式/,参数)
// 提取工资
// let str = "张三：1000，李四：5000，王五：8000。";
// let array = str.match(/\d+/g);
// log(array);
// 提取email地址
// let str1 = "123123@xx.com,fangfang@valuedopinions.cn 286669312@qq.com 2、emailenglish@emailenglish.englishtown.com 286669312@qq.com...";
// let array1 = str1.match(/\w+@\w+(\.\w+)+/g) // g表示全局
// log(array1)
// 3. 分组提取  
// 3. 提取日期中的年部分  2015-5-10
/* let str2 = "2015-5-10"
let array2 = str2.match(/(\d+)+/g)
log(array2)
log(array2[0])
log(array2.$2)
log(array2.$3) */
let str2 = "2015-5-10"
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/
if(reg.test(str2)){
    log(RegExp.$1)
    log(RegExp.$2)
    log(RegExp.$3)
}

// 正则替换 字符串.replace(/正则表达式/, "替换的字符串")
// 1. 替换所有空白
var str3 = "   123AD  asadf   asadfasf  adf ";
let str4 = str3.replace(/\s+/g,"xx");
log(str4)