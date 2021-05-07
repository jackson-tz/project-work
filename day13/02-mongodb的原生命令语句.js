/* 
---在命令窗口打开mongo: 先配置环境变量，然后打开命令窗口输入：mongo

---基本命令：
1：显示所有的数据库：show dbs
2：显示当前所在的数据库：db
3：切换数据库：use 库名   (注：当该库名不存在时，会创建一个该库名的数据库)
4：删除数据库：db.dropDatabase() 删除当前数据库
5：删除集合：show collections 删除当前库中的所有集合
6：删除当前集合：db.collection.drop()

---操作命令：
1：向集合中插入文档(数据)：db.<collection>.insert(doc)
2：查找集合中的文档(数据)：db.<collection>.find(doc)

---数据库的CRUD(增删改查)
--增加数据：
 1) db.<collection>.insert({doc}): 可以同时创建多个数据 ([{doc},{doc}],...)
    例：db.users.insert({name:"Bob",age:19,sex:"男"})
 2) db.<collection>.insertOne({doc}): 创建一条数据
    例：db.users.insertOne({name:"Bob",age:19,sex:"男"})
 3) db.<collection>.insertMany([{doc},{doc},...]): 可以同时创建多条数据
    例：db.users.insertOne([{name:"Bob",age:19,sex:"男"},{name:"Tom",age:19,sex:"男"}])

--查找数据：
 1) db.<collection>.find(): 查找该集合中所有的数据
 2) db.<collection>.find({查找条件}): 查找指定的数据
    例：1) - db.<collection>.find({name:"Bob"}) 查找满足这一个条件的数据
           - db.<collection>.find({name: "Bob",age:19}) 查找满足这两个条件的数据
        2) >  <  >=  <=  !==分别对应的是：$gt $lt $gte $lte $ne
           - db.<collection>.find({age: {$gt: 18}}) 查找年龄大于18的用户
           - db.<collection>.find({age: {$ne: 18}}) 查找年龄不等于18的用户
        3) 操作符 $or(或者) $in(或) $nin
           - db.<collection>.find({age:{$in:[18,20]}}) 查找年龄为18或者20的用户
           - db.<collection>.find({$or:[{age:18},{age:20}]}) 查找年龄为18或者20的用户
           - db.<collection>.find({age:{$nin:[18,20]}}) 查找年龄不为18或者20的用户
        4) 正则表达式查找：^表示开始，$表示结束
           - db.users.find({name: /^\w{2}$/}) 
            找到姓名是字母并且姓名长度是2的数据(通过正则查看的)
        5) $where 查找：接一个函数
           - db.users.find({$where: function(){
               return this.age === 18  //查找返回true的所对应的数据，当直接返回true时，查找到所有的数据
           }})
 3) db.<collection>.find({查询条件},{投影})
        查询条件：查找符合条件的数据
        投影：决定查询到的数据显示那些信息(值为1：显示; 值为0：隐藏)
    例如： db.users.find({name: "Bob"},{age: 1}) 
           db.users.find({name: "Bob"},{_id: 0}) _id默认都是显示的，这样可以隐藏

--更改数据：db.<collection>.uptata({查询条件},{新的文档},{配置对象})
 1) db.users.update({name: "bob"},{name: "Bob"}) 修改后，只留下name
 2) db.users.update({name: "Bob"},{$set: {age: 20}}) 修改指定的数据的信息
 3) db.users.update({age: 18},{$set: {age: 20}}) 多个符合条件，但只修改一个
 4) db.users.update({age: 18},{$set: {age: 20}},{multi: true}) 多个符合条件，修改多个

--删除数据：db.<collection>.remove({查询条件}) 删除符合条件的数据
 1) db.users.remove({age: 18}) 删除年龄为18的用户










*/