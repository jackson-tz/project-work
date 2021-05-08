//1.引入mongoose
//2.连接数据库
//3.创建Schema对象
//4.设置插入的数据的规则
//5.创建model对象
//6.向数据库中插入数据

const {log} = console;

(async function(){
    const mongoose = require("mongoose");
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/day14",{
            useNewUrlParser: true,
            useUnifiedTopology: true ,
        })
        log("数据库连接成功")
        const Schema = mongoose.Schema
        const userSchema = new Schema({
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
                default: "男",
            },
            date: {
                type: Date,
                default: Date.now()
            },
        },{
            collection:"user"
        })
        const userModel = mongoose.model("user",userSchema);
        userModel.create({
            name: "Tom",
            age: 18,
        },(err,data)=>{
            if(err) log("添加数据失败",err)
        })

        // userModel.deleteMany({age:18})
    }catch(err){
        log("数据库没有连接成功",err)
    }
})()