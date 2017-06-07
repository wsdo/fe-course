浏览器厂商以前就一直在实施CSS3，但它还未成为真正的标准。为此，当一些CSS3样式语法还存在波动时，它们提供针对浏览器的前缀。现在主要流行的浏览器内核主要有：


Trident内核：主要代表为IE浏览器
Gecko内核：主要代表为Firefox
Presto内核：主要代表为Opera
Webkit内核：产要代表为Chrome和Safari


Trident内核：前缀为-ms
Gecko内核：前缀为-moz
Presto内核：前缀为-o
Webkit内核：前缀为-webkit


.box {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
}

.box { -webkit-transform: rotate(45deg); transform: rotate(45deg); border-radius: 5px; box-shadow: 1px 1px 0 rgba(0,0,0,.25); transition: all .2s ease .1s; }


编辑器可以安装插件自动加上前缀
Autoprefixer

在工程化工具中安装
Gulp中配置Autoprefixer


背景起源属性：
padding-box：
从padding区域（含padding）开始显示背景图像。
border-box：
从border区域（含border）开始显示背景图像。
content-box：
从content区域开始显示背景图像。

使用方式，首先给想要设置的dom加上背景
然后再规定在哪区块显示

```
 p {
            border: 10px dashed #666;
            width: 200px;
            height: 200px;
            padding: 20px;
            background: #aaa url(img/1.jpg) no-repeat;
            background-size: cover;
        }
        
        .border-box p {
            background-origin: border-box;
        }
        
        .padding-box p {
            background-origin: padding-box;
        }
        
        .content-box p {
            background-origin: content-box;
        }
```

背景裁剪属性：
取值：
padding-box：
从padding区域（不含padding）开始向外裁剪背景。
border-box：
从border区域（不含border）开始向外裁剪背景。
content-box：
从content区域开始向外裁剪背景。
text：
从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果。遮罩效果 See with Webkit

背景尺寸：
用长度值指定背景图像大小。不允许负值。
<percentage>：
用百分比指定背景图像大小。不允许负值。
auto：
背景图像的真实大小。
cover：
将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
contain：
将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。


多列布局
多列 Multi-column
Properties
属性	CSS Version
版本	Inherit From Parent
继承性	Description
简介
columns	CSS3	无	设置或检索对象的列数和每列的宽度。复合属性
column-width	CSS3	无	设置或检索对象每列的宽度
column-count	CSS3	无	设置或检索对象的列数
column-gap	CSS3	无	设置或检索对象的列与列之间的间隙
column-rule	CSS3	无	设置或检索对象的列与列之间的边框。复合属性
column-rule-width	CSS3	无	设置或检索对象的列与列之间的边框厚度。
column-rule-style	CSS3	无	设置或检索对象的列与列之间的边框样式。
column-rule-color	CSS3	无	设置或检索对象的列与列之间的边框颜色。
column-span	CSS3	无	设置或检索对象元素是否横跨所有列。
column-fill	CSS3	无	设置或检索对象所有列的高度是否统一。
column-break-before	CSS3	无	设置或检索对象之前是否断行。
column-break-after	CSS3	无	设置或检索对象之前是否断行。
column-break-inside	CSS3	无	设置或检索对象内部是否断行。


column-span	CSS3	无	设置或检索对象元素是否横跨所有列。
none：
不跨列
all：
横跨所有列


转换
/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;

背面不可以看见
 backface-visibility:hidden; 不可以看见
 backface-visibility:visible; 默认值，可以看见

 https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform