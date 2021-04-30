/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.tabCutover = function (obj) {
 //获取所有的标题标签h3，和li标签
 var h3s = this.find("h3");
 var lis = this.find("li")
 //给所有的h3标签设置默认宽度
 h3s.css({"width" : 200 });
 //然后给每一个h3绑定点击事件
 h3s.each(function(index,element){
  $(element).on("click" , function(){
    //给点击的h3添加类active,并且给其他h3标签删除类active 
    $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    //给相对应的li标签的display属性设置为block，其它设置为none
    $(lis[index])
    .addClass("show")
    .siblings()
    .removeClass("show")
  })
 })

}
