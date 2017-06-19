## 官方网址

http://lesscss.org/

官方提供在线编译工具
http://less2css.org/

As an extension to CSS, Less is not only backwards compatible with CSS, but the extra features it adds use existing CSS syntax. This makes learning Less a breeze, and if in doubt, lets you fall back to vanilla CSS.

作为CSS的扩展，Less不仅向后兼容CSS，而且增加了使用现有CSS语法的额外功能。

使用方式

#1 在vs code 里面搜索 	Easy LESS
Easy LESS

Auto-compile LESS to CSS on save
Installation
Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

#其它编辑器也是如此
直接在编辑器里面搜索插件 less


less文档
http://lesscss.org/features/

注释：
// 两个双斜线表示注释，不被编译。
/* */ 写这个注释是可以被编译的。


变量：Variables
使用 @ 符号开始
// 变量
@stark_width:300px;

混合： Mixins

```
    /* 下面是混合的代码 */
    .border{
        border: 5px solid pink;
    }

    // 传惨
    .border_02(@border_width){
        border: solid yellow @border_width;
    }


    调用方式
    .box4{
        .border_02(10px);
    }   
``` 