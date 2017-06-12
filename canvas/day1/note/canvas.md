Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）。

<canvas id="canvas">对不起，您的浏览器不支持画布，请升级浏览器!</canvas>
如果浏览器不支持canvas 就会把标签里面的内容解析出来到浏览器上。

## fillRect()	绘制“被填充”的矩形

参数	描述
x	矩形左上角的 x 坐标
y	矩形左上角的 y 坐标
width	矩形的宽度，以像素计
height	矩形的高度，以像素计


## fillStyle	设置或返回用于填充绘画的颜色、渐变或模式
color	指示绘图填充色的 CSS 颜色值。默认值是 #000000。
gradient	用于填充绘图的渐变对象（线性或放射性）
pattern	用于填充绘图的 pattern 对象


## strokeStyle
定义和用法
strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。

默认值：	#000000
JavaScript 语法：	context.strokeStyle=color|gradient|pattern;

属性值
值	描述
color	指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
gradient	用于填充绘图的渐变对象（线性或放射性）
pattern	用于创建 pattern 笔触的 pattern 对象



# 路径
方法	描述
## fill()	填充当前绘图（路径）
    fill() 方法填充当前的图像（路径）。默认颜色是黑色。
    提示：请使用 fillStyle 属性来填充另一种颜色/渐变。
    注释：如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径，然后填充该路径。
    JavaScript 语法：
    context.fill();

## stroke()	绘制已定义的路径
    stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。

## beginPath()	起始一条路径，或重置当前路径

## moveTo()	把路径移动到画布中的指定点，不创建线条
    参数	描述
    x	路径的目标位置的 x 坐标
    y	路径的目标位置的 y 坐标
closePath()	创建从当前点回到起始点的路径

lineTo()	添加一个新点，然后在画布中创建从该点到最后指定点的线条
x	路径的目标位置的 x 坐标
y	路径的目标位置的 y 坐标

## fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。

    text	规定在画布上输出的文本。
    x	开始绘制文本的 x 坐标位置（相对于画布）。
    y	开始绘制文本的 y 坐标位置（相对于画布）。
    maxWidth	可选。允许的最大文本宽度，以像素计。

## textAlign 属性根据锚点，设置或返回文本内容的当前对齐方式。
    start	默认。文本在指定的位置开始。
    end	文本在指定的位置结束。
    center	文本的中心被放置在指定的位置。
    left	文本左对齐。
    right	文本右对齐。

##　textBaseline 属性设置或返回在绘制文本时的当前文本基线。

    alphabetic	默认。文本基线是普通的字母基线。
    top	文本基线是 em 方框的顶端。。
    hanging	文本基线是悬挂基线。
    middle	文本基线是 em 方框的正中。
    ideographic	文本基线是表意基线。
    bottom	文本基线是 em 方框的底端。


## drawImage() 方法在画布上绘制图像、画布或视频。
drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。
参数	描述

img	规定要使用的图像、画布或视频。
sx	可选。开始剪切的 x 坐标位置。
sy	可选。开始剪切的 y 坐标位置。
swidth	可选。被剪切图像的宽度。
sheight	可选。被剪切图像的高度。
x	在画布上放置图像的 x 坐标位置。
y	在画布上放置图像的 y 坐标位置。
width	可选。要使用的图像的宽度。（伸展或缩小图像）
height	可选。要使用的图像的高度。（伸展或缩小图像）


## 动画原理

canvas 的动画原理
画一帧 ->  全部清除 -> 重绘 -> 全部清除 -> 重绘 -> .....

