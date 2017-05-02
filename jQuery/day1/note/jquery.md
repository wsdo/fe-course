jquery 库

javascript 编程最恶心的地方

选择元素的时候， getElementById getElementsByTagName 这个函数名字太长
操作节点麻烦

jQuery 官网
    jQuery.com
    如果你想使用jQuery的时候，去官网下载一个源码
    http://jquery.com/download/


    There are two versions of Migrate. The first will help you update your pre-1.9 jQuery code to jQuery 1.9 up to 3.0. You can get that version here:

    Download the compressed, production jQuery Migrate 1.4.1  
    生产环境在开发中，就是线上的时候使用，就是真正的产品中使用。
    里面的代码是压缩混淆的 一般以 min.js  结尾，保证代码体积最小化。

    Download the uncompressed, development jQuery Migrate 1.4.1
    开发环境就是在 你本地开发调试中使用，出现了bug或报错，可以方便定位，方便调试。

    也可以使用以下的方式

    http://www.bootcdn.cn/jquery/

    http://cdn.code.baidu.com/

    https://cdnjs.com/libraries/jquery/

使用方式
<!-- 外链 -->
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.js"></script>

https://cdn.bootcss.com/jquery/1.12.4/jquery.js  使用外网访问
比较方便，不用自己本地下载这个js源码

//cdn.bootcss.com/jquery/1.12.4/jquery.js

外链前面不加 http 或https  以 // 开头这种方式就为了兼容 http 和https 环境，比如当你的网站是 https 的时候，你使用 http 的外链，会报安全错误，尤其是在ios系统中，会直接不让访问的。

jQuery 中文 手册
http://jq.shudong.wang/

官网的api文档
http://api.jquery.com/
