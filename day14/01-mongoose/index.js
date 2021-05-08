(async function (){
    const mongoose = require("mongoose");
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/day14")
        console.log("数据库连接成功")

        const userSchema = mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            sex: {
                type: String,
                default: "男"
            },
            date: {
                type: Date,
                default: Date.now()
            },

        },{});

        const userModel = mongoose.model("user",userSchema)
        //添加数据userModel.create({doc},callBack)
        userModel.create({
            name: "ab",
            age: 20,
        },(err,data)=>{
            if(err) console.log("数据没有添加成功",err)
        })

        //查找数据userModel.find/One({查询条件}[,投影],callBack)

        //更改数据userModel.updateOne/Many({查询条件}[,配置对象]callback)

        //删除数据userModel.deleteOne/Many({查询条件},callBack)

        // 注意：数据的增删改查都是异步执行的，如果没有回调函数则返回一个promise对象
    }catch(err){
        console.log("数据库连接失败")
    }
})();