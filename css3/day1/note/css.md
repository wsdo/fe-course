css3简介

css3 是 css2 进化的版本，在css2的基础上面，增强或新增了很多特性。

## css3的现状
1.浏览器支持程度比较差，需要添加私有前缀
2.移动端支持优于pc端
3.不断改进中
4.应用相对广泛

css 兼容性测试
http://www1.pconline.com.cn/pcedu/specialtopic/css3-doraemon/

查询css兼容性
caniuse.com

http://html5test.com/results/desktop.html


css 是层叠样式表  cascading style sheets

css3 源于css 从初始创立就有一个规定，就是遇见不认识的选择器，属性，静默不报错，不影响后面能识别的语句。





手册：
http://css.shudong.wang

如何使用这个手册

[] 表示全部可选项
|| 表示或者
| 表示多选一
? 表示0个或者1
* 表示0个或者多个
{} 表示范围

margin：[ <length> | <percentage> | auto ]{1,4}

属性选择器：
E[attr] 表示存在 attr属性即可
E[attr=val] 表示属性值完全等于val
E[attr~=val] 表示的一个单独的属性值，这个属性值是以空格分隔的
E[attr|=val] 表示的要么一个单独的属性值，要么这个属性值是以 '-' 分隔的
E[att^="val"] 表示的属性值里包含val字符并且在"开始"位置
E[att$="val"] 表示的属性值里包含val字符并且在"结束"位置
E[att*="val"] 表示的属性值里包含val字符并且在"任意"位置


关系选择符：

包含选择符(E F)


下面这几个对ie6不兼容

子选择符(E>F)
相邻选择符(E+F)  选择紧贴在E元素之后F元素。
        .box2+p {
            color: green;
        }

兄弟选择符(E~F) css3新增加的  
    选择E元素后面的所有兄弟元素F。
```
            .box2~p {
            color: yellowgreen;
        }
        
```

jquery 里面的选择器 没有兼容性问题

$("form ~ input")