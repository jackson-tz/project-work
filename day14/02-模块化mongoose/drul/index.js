//因为要检测数据库是否连接成功，有意用一个async的自调用函数
(async function(){
    //调用db文件中的index.js文件，连接数据库，并且接收返回的promise,
    try{
        const db = require("../db")
        await db;
        console.log("数据库连接成功");
        //接收model中导出的userModel对象
        const userModel = require("../model")
        //添加数据,数据的增删改查都是异步执行的,当没有写回调函数,返回的是一个promise对象,利用await操作成功后,执行后面的代码
        // await userModel.create({
        //     name: "Tom",
        //     age: 18,
        // },{
        //     name: "Jack",
        //     age: 18
        // })

        //用一个常量接收，返回值，接收到的就是查找的数据
        // const user = await userModel.find()
        // console.log(user)

        await userModel.deleteOne({})
        
    }catch(err){
        console.log("数据库连接失败")
    }
})();