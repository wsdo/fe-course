changedTouches
概述

这个 TouchList 对象列出了和这个触摸事件对应的 Touch 对象。

对于 touchstart 事件, 这个 TouchList 对象列出在此次事件中新增加的触点。
对于 touchmove 事件，列出和上一次事件相比较，发生了变化的触点。


对于 touchend ，列出离开触摸平面的触点（这些触点对应已经不接触触摸平面的手指）。
语法

var touches = touchEvent.changedTouches;

说白了，就是在你手指离开屏幕时，想要获取触点的信息，此时touches:TouchList没有这些触点信息，就去这个changedTouches里面找，


假如有三张图片

怎么让这三张图片 平移
1 2 3

1 + 48 
2+ 48
3 +48 