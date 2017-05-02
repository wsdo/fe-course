version
    v_1.0.0

介绍
    这个是幻灯片的组件
    支持：响应式，支持多种动效，指定轮播，

使用方式
```
/*引入样式*/
<link rel="stylesheet" href="./css/slider.css">

<div class="carousel" id="carousel"></div>

/*引入js文件*/
<script src="./slider.js"> </script>
使用方式
var slider = new Slider({
    'ID' : 'carousel',
    'autoplayinterval' : 500,
    'with' : 600
});
```
api参考
    ID : "传入的dom中的id"
    autoplayinterval : 间隔时间
    with : 轮播图宽度
