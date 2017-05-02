jQuery 中使用 $ 符号当做选择器

此时 $ 符号和 jQuery 字面 是一个功能
jQuery

$(".box").css({"background-color":"red","width":"200px"});
jQuery(".box").css({"background-color":"red","width":"200px"});

这两个功能是一样的 此时使用 $ 和 jQuery 来调用


使用方式
$()
在括号里面写要选择的 class 名字、 id名字、标签名字
dom :   <div class="box"></div>

class 选择方式： $(".classname")     $(".box")
$(".box").css("background-color","red");

id 选择方式 是使用 $("#idname")  $("#box1")
$("#box1").css("background-color","yellowgreen");

标签选择的方式
$("p").css("background-color","#000");

使用jQuery选择器，又想写原生的js的时候，可以使用$("p")[0]这种方式在转换。
$("p")[0].style.backgroundColor = "yellow";
此时[0] 中括号里面的数字可以更改，代表的是选择第几个 相同dom


在jQuery 中使用api的方式是，在一个函数方法里面写参数
jQuery版本
$("p").css("background-color","#000");

这个是原生的版本
document.getElementsByTagName('p').style.backgroundColor = "yellow";


体验了一下 jQuery 的动画
$(".box").animate({"left":900,"width":100},4000,function(){
    console.log("运动完成");
})
一行代码搞定
