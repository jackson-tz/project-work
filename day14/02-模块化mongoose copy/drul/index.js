const {log} = console;
(async function(){
    //接收连接数据库导出的promise对象
    const db = require("../db/index.js")//  /index.js可以省略不写
    try{
        await db;
        log("数据库连接成功")
        //接收导出的userModel对象
        const userModel = require("../model")

        //数据的增删改查是异步操作
        await userModel.create({
            name: "小D",
            age: 25,
        })

        let res = await userModel.find({age: 25})
        log(res)
    }catch(err){
        log("数据库没有连接成功",err)
    }
})();