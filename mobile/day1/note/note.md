http://tongji.baidu.com/data/browser

视口 viewprot
document.documentElement.clientWidth;


在不约束视口的情况下
无论手机的分辨率是多少，这个视口永远都是980，

What Is the Viewport?

The viewport on the desktop and the viewport on iOS are slightly different.

Safari on iOS has no windows, scroll bars, or resize buttons as shown on the right in Figure 3-1. The user pans by flicking a finger. The user zooms in by double-tapping and pinch opening, and zooms out by pinch closing—gestures that are not available for Safari on the desktop. Because of the differences in the way users interact with web content, the viewport on the desktop and on iOS are not the same. Note that these differences between the viewports may affect some of the HTML and CSS instructions on iOS.

Default Viewport Settings

Safari on iOS sets the size and scale of the viewport to reasonable defaults that work well for most webpages, as shown on the left in Figure 3-3. The default width is 980 pixels. However, these defaults may not work well for your webpages, particularly if you are tailoring your website for a particular device. For example, the webpage on the right in Figure 3-3 appears too narrow. Because Safari on iOS provides a viewport, you can change the default settings.

为什么要使用视口
如果不使用viewport 每个手机呈现视口宽度都是980，如果想让webpage 更好的展现，就得让viewport 匹配一下当前的手机。

document.documentElement.clientWidth

<meta name=viewport content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui">

width=device-width,   视口为设备的宽度
initial-scale=1.0,  初始化的视口的大小是1.0倍
minimum-scale=1.0,  最小倍数是1.0倍
maximum-scale=1.0,  最大倍数是1.0倍
user-scalable=no   不允许缩放视口


抽取几个设备的宽度
iPhone7 plus 414 
苹果7 375
乐视2  412
小米   360
iphone5 320
vivo X7 360
华为荣耀8  360
华为mate8  360
小米5plus 393
魅族是 360

iPhone7 plus 414 * 736
iPhone6  375 * 667
iPhone4  320 * 480

开发的时候，我们只关注这个设备的宽度，分辨率不关注。


 em 
相对长度单位。相对于当前对象内文本的字体尺寸。
如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

会去它父级寻找，按照父级的尺寸的倍数计算当前的单位

px是固定像素，em是相对父元素字体大小的百分比,比如div设成15px，div的子节点1em就是15px,
2em就是30px。

em
如果他自己设置了 font-size 就按照自己的font-size,如果自己没有这个font-size,他就去找父亲的font-size
如果它父亲就是body，就按照body 的font-size,如果body 没有设置这个font-size 就按照默认16px计算。

因为em存在各种问题。
写某些单位的时候受自己或父级的font-size影响，css3出现rem;




