/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {
  //获取ul中所有的li标签
  var lis = this.find("li");
  //给获取到的所有li元素设置初始宽度（ul的宽度/li的个数）
  var avgWidth = this.width() / lis.length;
  //将计算得出的宽度赋值给每个li元素，（有隐式迭代）
  lis.css("width" , avgWidth);
  //计算当鼠标移入li时，当前这个li的最大宽度，和它的兄弟li元素最小宽度
  obj.minWidth = obj.minWidth || 100;
  obj.maxWidth = this.width() - obj.minWidth * (lis.length - 1);
  //给每个li元素添加背景
  lis.each(function(index,element){
      $(element).css("backgroundColor" , obj.colors[index]);
  })
  //给li添加鼠标移入事件
  lis.on("mouseenter" , function(){
      //给鼠标移入的li元素的宽度设置为maxWidth,兄弟li设置为minWidth
      $(this)
      .stop(true)
      .animate("width : maxWidth")
      .sinlings()
      .stop(true)
      .animate("width : minWidth")
  })
  //给ul添加鼠标移出事件，并且将li的宽度回复默认宽度
  this.on("mouseleave" , function(){
      $(this)
      .find("li")
      .stop(true)
      .animate("width : avgWidth")
  })
}
