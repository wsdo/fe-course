2017年6月5日17:45:07
 html5 day4
 上午讲解了留言板，使用web sql  本地存储 离线应用存储，还有一些h5的新特性，当输入表单内容后，不用提交，就可以保存。下午讲解了web workes ，介绍了web socket，演示了实时画板和聊天室项目； 最后介绍了 css3  ，属性选择器，手册的使用方式。

2017年6月6日17:28:10
css3第一天
css3 边框20种效果，文本、边框阴影，发光文字动画案例，关系选择符，属性选择符，伪类选择符，伪对象选择符，过渡的基本语法，什么时候触发过渡，贝尔曲线介绍。

2017年6月7日17:45:41
css第二天
今天讲课内容：
背景：background-origin clip size, multi-column rule span fill befor after 
文本： word-break warp
2d 3d： transform:matrix translate scale rotate skew perspective
拖拽立方体，空间移动 ，旋转轴设置，变形背面新的图片。
作业：3d幻灯片 ，环绕相册

2017年6月8日17:19:17

css3第三天
3d轮播，3d图片环绕：可以滚轮和拖动控制，animation动画的7个参数用法，动画的几个案例

作业
0.把今天讲的知识整理，3d轮播，3d图片环绕，至少敲一遍。
1.把未完成的3d轮播完成
2.把手心输入法的几个css3动画完成
3.qq浏览器动画完成

2017年6月12日17:45:15

canvas第一天
讲课内容：
    canvas基本用法，笔触和填充，路径，绘制矩形的方式，圆弧，文本，textAlign，textBaseline，绘制图形，武士行走demo，小球运动，绚丽的小球跟随鼠标效果，反弹小球，连线小球。
作业：
    0.把代码敲4遍，整理重点词汇。 
    1.使用canvas写一个时钟效果，并且可以走帧，和当前的时间一样，有分刻度，有时针，有分针
    2.在连线的每个小球上面写字

2017年6月16日16:33:33
移动端:
第一天讲课内容：
viewport 详细讲解
约束视口
百分比布局，平分，box-sizing属性的作用用途，弹性盒子，em各种情况的含义，rem作用，怎么配合media使用
第二天：
媒体查询详细讲解，适应各种屏幕，很多屏幕识别，手机识别横竖屏，min-width,max-width,图片自动等比缩放，
js来来设置盒子的等比缩放，html字号，随着屏幕的宽度实时变化，getComputedStyle属性，触摸事件，touchstart，
touchmove，touchend，手指拖拽，手指滑动轮播图。
第三天：
手指轮播图加上定时器，swipe插件讲解源码分析，zepto讲解，插件拓展方式，动画和jQuery的区别，
icon ： 使用 icomoon 把阿里妈妈的字体图标下载后上传到 icomoon生成自己的图标库，然后用加入class的方式使用，icon-awesome的使用方式，怎么更改icon大小，颜色，宽细。
利用淘宝的sui框架 实战无线滚动
作业
http://api.shudong.wang/v1/db.php
利用王者荣耀英雄列表api写一个无线滚动，在手机端

自己学习bootstarp 些一个pc 和手机都兼容的网站
仿照这个网站做一个 手机端和 pc都适用的
https://www.newsteer.com/
bootcss.com
中文网手册 
一字不落的读完 

周末找一个公开的api
下周开始做一个移动端的项目


2017年6月27日17:26:39
移动端项目：审阅同学们的项目，并提出一些建议，和技巧。
    1.开始页面叠在一块，然后图片出来后，又把dom撑开，这样体验很差
    2.刚开始加载很乱，可以使用开场动画。
    3.返回列表，跳转到之前浏览的位置。
    4.无线滚动
    使用sui来做
    自己使用瀑布流布局方式
针对这些问题，提出解决方案。

npm：npm介绍，npm命令行参数介绍，教大家怎么发布一个自己的包，并且下载测试。

gulp：
    项目目录结构配置
    打包：单个文件，多个文件 gulp-concat;
    压缩：利用gulp-uglify gulp-rename 实现同时输出一个压缩过all.js 和一个未压缩版本的文件all.min.js  
    合并：把所有项目的js文件合并到一个all.js,减少http请求。
    浏览器实时预览:
    利用gulp-connect 的  livereload: true 来实现。

