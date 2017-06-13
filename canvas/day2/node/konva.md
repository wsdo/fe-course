What’s Konva?

Konva is an HTML5 Canvas JavaScript framework that extends the 2d context
by enabling canvas interactivity for desktop and mobile applications.

Konva enables high performance animations, transitions, node nesting, layering, filtering,
caching, event handling for desktop and mobile applications, and much more.

You can draw things onto the stage, add event listeners to them, move them,
scale them, and rotate them independently from other shapes to support high performance
animations, even if your application uses thousands of shapes.

This project began as a GitHub fork of KineticJS.

Konva是一个HTML5 Canvas JavaScript框架，它扩展了2d环境
通过支持桌面和移动应用程序的canvas交互。

Konva支持高性能的动画、过渡、节点嵌套、分层、过滤，
缓存、桌面和移动应用程序的事件处理等等。

你可以把它们画到舞台上，给它们添加事件监听器，移动它们，
对它们进行缩放，并将它们与其他形状独立地旋转，以支持高性能
动画，即使你的应用程序使用了上千种形状。

这个项目最初是作为一个动态js的GitHub分支开始的。

中文档
http://www.konvajs.com/

框架特色

内置支持HDPI设备且文字和图形进行像素优化
面向对象API
节点嵌套和事件冒泡
高性能事件检测通过颜色哈希地图
支持分层
节点缓存以提高绘图性能
节点可以转换成数据URL，图像数据或图像对象
动画支持
补间动画
可配置约束拖放边界
滤镜
可以使用包括矩形，圆形，图像，文本，线条，多边形，SVG路径等形状
自定义形状
事件驱动架构，使开发人员能够订阅更改事件，图层绘制事件等
序列化和反序列化
支持选择器例如 stage.get（'＃foo'）和layer.get（'。bar'）;
支持PC端和移动端事件
AMD 支持
自定义命中空间


使用方式

在konva 框架里面 如果调用某个属性的时候，在前面加上getxxx 就可以

var stage = new Konva.Stage({
    container: 'container',
    width: 300,
    height: 300
});


stage.getWidth()
