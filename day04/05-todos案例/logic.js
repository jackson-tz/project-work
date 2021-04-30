//主要定义todos案例的义务逻辑
var todoList = [
    {
        id : 1,
        todoName : "睡觉",
        isdone : true,
    },
    {
        id : 2,
        todoName : "吃饭",
        isdone : true,
    },
    {
        id : 3,
        todoName : "敲代码",
        isdone : false,
    }
]

//0：没有数据，就不展示todo-main和todo-footer，并提示一句话，提示恭喜你，没有任务
if(todoList.length === 0){
    hide()
}
//需求1：遍历todoList，动态的创建html字符串，然后把数据添加到todo-main上

//1.1 利用map方法遍历todoList得到一个新数组
var htmlArr = todoList.map(function(item,index){
    //1.2判断数据中的done的值，如果为true的话，就将input标签中添加一个checked属性，并在审判标签中添加一个类名（done）
    if(item.isdone){
        //1.3创建一个字符串，并返回到新数组中
        return (
            '<li>\
            <label>\
              <input type="checkbox" checked />\
              <span class = "done">'+item.todoName+'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
          </li>'
        )
        //1.4如果done的值为false，就直接返回下列字符串到新数组中，不添加任何新属性和类
    }else{
       return (
        '<li>\
            <label>\
                <input type="checkbox" />\
                <span>'+item.todoName+'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
        </li>'
       )
    }
})
//1.5把hemlArr转字符串，并将html字符串渲染到到页面中（插入到todo-main标签中）
$(".todo-main").html(htmlArr.join(''))
//
checkedBox();
showListNum();

//需求2：添加任务逻辑
//当todo-header的表单里填写内容，按回车键，要把内容添加到todo-main中，创建键盘抬起事件，当按下回车键(keyCode === 13) 时，让事件触发

//2.1给.todo-header中input绑定键盘抬起事件
$(".todo-header input").on('keyup',function(e){
    //2.2判断按下的的是回车键，触发事件
    if(e.keyCode === 13){
        //2.3获取.todo-header中input的值，并且去掉两边的空格
       var value = $(this).val().trim()
       //2.4判断value是否存在，若没有值，则停止当前函数运行，且清空input
       if(!value) {
           $(this).val('')
           return;
        } 
        //2.5清空input
       $(this).val('')
       //2.6根据value的值创建heml字符串
        var str = '<li>\
            <label>\
                <input type="checkbox"/>\
                <span>'+value+'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
        </li>'
        show();
    }
    //2.7将字符串添加到todo-main中渲染到页面中
    $(".todo-main").append(str)
    //添加内容后全选框也要改变，调用checkedBox函数
    checkedBox();
    showListNum();
})

//需求3：修改任务项的状态

//3.1获取所有任务项的input（checkbox）
//3.2注册点击事件
$(".todo-main").on("click","li>label>input",function(){
    //3.3获取input[checkbox]的状态，然后给span添加或删除类名done

    var isChecked = $(this).prop('checked')
    if(isChecked){
        $(this).next().addClass("done")
    }else{
        $(this).next().removeClass("done")
    }
    //获取所有的多选框的个数和选中的个数，分别赋值到todo-footer的span标签中
    checkedBox()
    showListNum()
})

//当todo-footer中的多选框选中，其他的都选中，不选中，则其他的都不选中 
$(".todo-footer").on("click","label input",function(){
    var isFootChecked = $(".todo-footer input").prop('checked')
    isFootChecked ?
    $(".todo-main>li>label>input").prop('checked',isFootChecked).next().addClass("done") :  
    $(".todo-main>li>label>input").prop('checked',isFootChecked).next().removeClass("done")
    checkedBox()
    showListNum()   
        
})

//点击todo-main中的btn-danger按钮，删除该对应的数据
$(".todo-main").on("click","li button.btn-danger",function(){

    $(this).parent().remove()
    console.log($(this).parent().stop(true).slideUp())
    
    checkedBox()
    showListNum()
    isShow();
})

//点击todo-footer中的button.btn-danger的按键，清除已完成的任务
//1.获取todo-footer元素给button.btn-danger绑定点击事件
$(".todo-footer").on("click","button.btn-danger",function(){
    //获取已完成的数据,并删除
    $(".todo-main li label input:checked").parent().parent().remove()
    checkedBox()
    showListNum()
    isShow();
    
    

})