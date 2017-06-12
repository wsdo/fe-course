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

beginPath()	起始一条路径，或重置当前路径

moveTo()	把路径移动到画布中的指定点，不创建线条
    参数	描述
    x	路径的目标位置的 x 坐标
    y	路径的目标位置的 y 坐标
closePath()	创建从当前点回到起始点的路径

lineTo()	添加一个新点，然后在画布中创建从该点到最后指定点的线条
x	路径的目标位置的 x 坐标
y	路径的目标位置的 y 坐标