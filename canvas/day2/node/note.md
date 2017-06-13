source-over (default)

这是默认设置，新图形会覆盖在原有内容之上。

Image:Canvas_composite_srcovr.png

destination-over

会在原有内容之下绘制新图形。

Image:Canvas_composite_destovr.png

source-in
The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent

新图形会仅仅出现与原有内容重叠的部分。其它区域都变成透明的。

Image:Canvas_composite_srcin.png

destination-in
The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.

原有内容中与新图形重叠的部分会被保留，其它区域都变成透明的。

Image:Canvas_composite_destin.png

source-out
The new shape is drawn where it doesn't overlap the existing canvas content.

结果是只有新图形中与原有内容不重叠的部分会被绘制出来。

Image:Canvas_composite_srcout.png

destination-out
The existing content is kept where it doesn't overlap the new shape.

原有内容中与新图形不重叠的部分会被保留。

Image:Canvas_composite_destout.png

source-atop
The new shape is only drawn where it overlaps the existing canvas content.

新图形中与原有内容重叠的部分会被绘制，并覆盖于原有内容之上。

Image:Canvas_composite_srcatop.png

destination-atop
The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.

原有内容中与新内容重叠的部分会被保留，并会在原有内容之下绘制新图形

Image:Canvas_composite_destatop.png

lighter
Where both shapes overlap the color is determined by adding color values.

两图形中重叠部分作加色处理。

Image:Canvas_composite_lighten.png

darken
Where both shapes overlap the color is determined by subtracting color values.

两图形中重叠的部分作减色处理。

Image:Canvas_composite_darken.png

xor
Shapes are made transparent where both overlap and drawn normal everywhere else.

重叠的部分会变成透明。

Image:Canvas_composite_xor.png

copy
Only draws the new shape and removes everything else.

只有新图形会被保留，其它都被清除掉。


https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement