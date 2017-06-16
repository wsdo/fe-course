Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。

zepto 是jQuery的阉割版
甚至比jQuery还牛逼
Zepto的设计目的是提供 jQuery 的类似的API，但并不是100%覆盖 jQuery 。Zepto设计的目的是有一个5-10k的通用库、下载并快速执行、有一个熟悉通用的API，所以你能把你主要的精力放到应用开发上。

主要用于移动端
下载 Zepto
zepto.js v1.2.0 (开发版) – 57.3k 未压缩，包含注释
zepto.min.js v1.2.0 (生产版) – 9.6k gzip压缩

jQuery 据某些专家分析，jQuery专门用来写兼容的代码达到了50%。


module	default	description
zepto	✔	核心模块；包含许多方法
event	✔	通过on()& off()处理事件
ajax	✔	XMLHttpRequest 和 JSONP 实用功能
form	✔	序列化 & 提交web表单
ie	✔	增加支持桌面的Internet Explorer 10+和Windows Phone 8。

说说zepto 的动画 和jQuery动画有什么区别？

里面动画实现是用css3的原理
里面几乎没有定时器

jQuery就是用定时器来做的
