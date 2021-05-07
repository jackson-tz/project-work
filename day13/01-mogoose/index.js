//mongoose利用connect()方法连接数据库，成功后会返回一个promise，利用await来判断数据库是否连接成功
//由于async函数就调用一次，所以这里利用自调用函数
(async function(){
    //1.引入mongoose
    const mongoose = require("mongoose");
    //2.利用try...catch...: 当连接数据库失败后，提示用户连接失败
    try{
        //3.连接数据库，
            // - 127.0.0.1:27017表示：本机回送地址
            // - test3表示的是：创建的数据库的库名，当本机没有该数据库时，会自动创建该数据库，有则与该数据库连接
        await mongoose.connect("mongodb://127.0.0.1:27017/test3",{
            //处理报错
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("数据库连接成功了");
        //创建Schema对象
        const Schema = mongoose.Schema;
        //制定文档的规则
        const usersSchema = new Schema({
            name: {
                //输入的信息的数据类型
                type: String,
                //该信息是否必填，true：表示必填
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            sex: {
                type: String,
                //表示默认值，当该信息未输入时，默认为default中的值
                default: "男"
            },
            info: {
                type: Schema.Types.Mixed,//表示任何类型
                default: "暂未描述信息"
            },
            date:{
                type: Date,
                default: Date.now()
            }
        });
        //创建集合对象model要使用schemas实例化对象
        //usersModel = mongoose.model("集合名", schema对象), 会返回一个集合对象
        const usersModel = mongoose.model("users",usersSchema);
        //创建一条信息数据填入集合中
        //添加数据是异步操作，添加完成后会调用这个回调函数
        usersModel.create({
            name: "Lili",
            age: 20,
            sex: "女"
        },(err,data)=>{
            console.log(err,data)
        })
    }catch(error){
        console.log("数据库连接失败了",error)
    }
})();