sass 官网
http://sass-lang.com/documentation/ 

一定要记住这几个单词

nested 嵌套
compact 紧凑
expanded 扩展
compressed 压缩

注释：
注释 /* */ 与 // (Comments: /* */ and //)
Sass 支持标准的 CSS 多行注释 /* */，以及单行注释 //，前者会 被完整输出到编译后的 CSS 文件中，而后者则不会，例如：
/*! 强制注释 */  
将 ! 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。
在里面多加一个！感叹号，这样在把scss 压缩成最小时，也会带着这个注释。


## 变量
变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 !global


http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method
map_get($map, $key)

Returns the value in a map associated with the given key. If the map doesn’t have such a key, returns null.
```
    $map: (hero: libai, key2: anqila, key3: lanlingwang);
    .box {
        content: map-get($map, key2);
    }

    result:
    .box {
        content: anqila;
    }


```

- (List) map_keys($map)
Returns a list of all keys in a map.
把所有的key值返回
map-keys(("foo": 1, "bar": 2)); 
返回值
"foo", "bar"





4. CSS 功能拓展 (CSS Extensions)
4.1. 嵌套规则 (Nested Rules)
Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，


4.2. 父选择器 & (Referencing Parent Selectors: &)
在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 hover 样式时，或者当 body 元素有某个 classname 时，可以用 & 代表嵌套规则外层的父选择器。

4.3. 属性嵌套 (Nested Properties)
有些 CSS 属性遵循相同的命名空间 (namespace)，比如 font-family, font-size, font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，


6.1. Interactive Shell
Interactive Shell 可以在命令行中测试 SassScript 的功能。在命令行中输入 sass -i，然后输入想要测试的 SassScript 查看输出结果


6.3. 数据类型 (Data Types)
SassScript 支持 6 种主要的数据类型：

数字，1, 2, 13, 10px
字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
颜色，blue, #04a3f9, rgba(255,0,0,0.5)
布尔型，true, false
空值，null
数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)
SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 !important 声明。然而Sass 不会特殊对待这些属性值，一律视为无引号字符串。


6.3.1. 字符串 (Strings)

SassScript 支持 CSS 的两种字符串类型：有引号字符串 (quoted strings)，如 "Lucida Grande" 'http://sass-lang.com'；与无引号字符串 (unquoted strings)，如 sans-serif bold，在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{} (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名：



6.3.2. 数组 (Lists)

数组 (lists) 指 Sass 如何处理 CSS 中 margin: 10px 15px 0 0 或者 font-face: Helvetica, Arial, sans-serif 这样通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为数组 —— 只包含一个值的数组。

数组本身没有太多功能，但 Sass list functions 赋予了数组更多新功能：nth 函数可以直接访问数组中的某一项；join 函数可以将多个数组连接在一起；append 函数可以在数组中添加新值；而 @each 指令能够遍历数组中的每一项。

数组中可以包含子数组，比如 1px 2px, 5px 6px 是包含 1px 2px 与 5px 6px 两个数组的数组。如果内外两层数组使用相同的分隔方式，需要用圆括号包裹内层，所以也可以写成 (1px 2px) (5px 6px)。变化是，之前的 1px 2px, 5px 6px 使用逗号分割了两个子数组 (comma-separated)，而 (1px 2px) (5px 6px) 则使用空格分割(space-separated)。

当数组被编译为 CSS 时，Sass 不会添加任何圆括号（CSS 中没有这种写法），所以 (1px 2px) (5px 6px) 与 1px 2px, 5px 6px 在编译后的 CSS 文件中是完全一样的，但是它们在 Sass 文件中却有不同的意义，前者是包含两个数组的数组，而后者是包含四个值的数组。

用 () 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 font-family: () Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 1px 2px () 3px 或 1px 2px null 3px。

基于逗号分隔的数组允许保留结尾的逗号，这样做的意义是强调数组的结构关系，尤其是需要声明只包含单个值的数组时。例如 (1,) 表示只包含 1 的数组，而 (1 2 3,) 表示包含 1 2 3 这个以空格分隔的数组的数组。


6.4.3. 字符串运算 (String Operations)

+ 可用于连接字符串
```
p {
    cursor: e + -resize;
}
注意，如果有引号字符串（位于 + 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 + 左侧）连接有引号字符串，运算结果则没有引号。
p:before {
    content: "Foo " + Bar;
    font-family: sans- + "serif";
}

result：

p {
  cursor: e-resize;
}

p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```


6.9. 变量定义 !default (Variable Defaults: !default)
可以在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。

7.1. @import
Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

Sass 在当前地址，或 Rack, Rails, Merb 的 Sass 文件地址寻找 Sass 文件，如果需要设定其他地址，可以用 :load_paths 选项，或者在命令行中输入 --load-path 命令。

通常，@import 寻找 Sass 文件并将其导入，但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

文件拓展名是 .css；
文件名以 http:// 开头；
文件名是 url()；
@import 包含 media queries。
如果不在上述情况内，文件的拓展名是 .scss 或 .sass，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 .scss 或 .sass 的文件并将其导入。


@mixin  名字 （参数1，参数2 ..){

}
