//判断选中的多选框
function checkedBox(){
    //获取todo-main中多选框的个数allCheckbox
    var allCheckbox = $(".todo-main>li>label>input").length
    //获取todo-main中的多选框选中的个数allChecked
    var allChecked = $(".todo-main>li>label>input:checked").length
    //判断当allChecked与allCheckbox相等时，就选中todo-footer中的input多选框
    allChecked === allCheckbox ? 
    $(".todo-footer label input").prop("checked",true) :
    $(".todo-footer label input").prop("checked",false)
}

//将数据的个数和完成的个数传到todo-footer中
function showListNum(){
    //获取todo-main中多选框的个数allCheckbox
    var allCheckbox = $(".todo-main>li>label>input").length
    //获取todo-main中的多选框选中的个数allChecked
    var allChecked = $(".todo-main>li>label>input:checked").length
    $(".todo-footer>span").html("<span>已完成"+allChecked+"</span> / 全部"+allCheckbox+" ")
}

//是否展示todo-main和todo-footer
function isShow(){
    $(".todo-main li").length ? show() : hide()
}

//展示todo-main和todo-footer
function show(){
    $(".todo-main").show()
    // $(".todo-main").stop(true).slideDown()
    $(".todo-footer").show()
    // $(".todo-footer").stop(true).slideDown()
    $(".todo-wrap h3").remove()
}

//隐藏todo-main和todo-footer
function hide(){
    $(".todo-main").hide()
    $(".todo-footer").hide()
    $(".todo-wrap").append("<h3>恭喜你，没有任务</h3>")
}