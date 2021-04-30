/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {
  //业务逻辑：
  //1.找出所有的li标签
  var lis = $(this).find("li");
  //2.给每一个li设置一个初始宽度（ul的总宽度/li的个数）
  var avgWidth = this.width() / lis.length
  //3.把初始宽度赋值给li
  lis.css({"width" : avgWidth})
  //4.将调用函数时传入的背景插入到对应的li中，给li遍历
  lis.each(function(index,element){
    $(element).css({"backgroundColor" : obj.colors[index]})
  })
  //计算每个li当移入时宽度改变的最大值和其兄弟li宽度改变的最小值
  obj.minWidth = obj.minWidth || 100;
  obj.maxWidth = this.width() - obj.minWidth * (lis.length - 1)
  //给每一个li注册鼠标移入事件
  lis.on("mouseenter",function(){
    $(this).stop(true)
    .animate({"width" : obj.maxWidth})
    .siblings()
    .stop(true)
    .animate({"width" : obj.minWidth})
  })
  //给ul注册鼠标移出事件，让所有的li回复默认宽度avgWidth
  this.on("mouseleave", function(){
    lis.stop(true).animate({"width" : avgWidth})
  })
}
