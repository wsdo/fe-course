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

混合带默认参数
```
.border_radius(@raidus:5px){
    -webkit-border-radius:@raidus;
    -moz-border-radius:@raidus;
    border-radius:@raidus;
}

.radius_test{
    width:100px;
    height: 40px;
    background-color: green;
    .border_radius();
}

.radius_test1{
    width:100px;
    height: 40px;
    background-color: green;
    .border_radius(10px);
}
```

替换
发布v1.7.0

参数：

string：搜索和替换的字符串。
pattern：要搜索的字符串或正则表达式模式。
replacement：用于替换匹配模式的字符串。
flags:(可选）正则表达式标志。
返回：具有替换值的字符串。

例：

replace("Hello, Mars?", "Mars\?", "Earth!");
replace("One + one = 4", "one", "2", "gi");
replace('This is a string.', "(string)\.$", "new $1.");
replace(~"bar-1", '1', '2');
结果：

"Hello, Earth!";
"2 + 2 = 4";
'This is a new string.';
bar-2;


replace("Hello, Mars?", "Mars\?", "Earth!");

Mars? 被第二个参数 匹配上了，被第三个参数替换了，so ..  Hello,Earth!

e

CSS escaping, replaced with ~"value" syntax.
It expects string as a parameter and return its content as is, but without quotes. It can be used to output CSS value which is either not valid CSS syntax, or uses proprietary syntax which Less doesn't recognize.

Parameters: string - a string to escape.

Returns: string - the escaped string, without quotes.

Example:

filter: e("ms:alwaysHasItsOwnSyntax.For.Stuff()");
Output:

filter: ms:alwaysHasItsOwnSyntax.For.Stuff();
Note: The function accepts also ~"" escaped values and numbers as parameters. Anything else returns an error.

~"value"  
It expects string as a parameter and return its content as is, but without quotes.
它接受一个字符串作为参数，并返回原样的内容，不含引号。
It can be used to output CSS value which is either not valid CSS syntax
它可用于输出一些不合法的css语法。
or uses proprietary syntax which Less doesn't recognize.
或者使用less不识别的属性。

## length
    返回列表中元素的个数。
## extract
    返回列表中知道位置的元素。

Math Functions 数学函数

ceil
Rounds up to the next highest integer. 向上取整
Parameters: number - a floating point number.  参数：浮点型

Returns: integer  返回值：整形

Example: ceil(2.4)  案例：ceil(2.4)

Output: 3 输出：3



floor 

Rounds down to the next lowest integer.  向下取整
Parameters: number - a floating point number. 浮点型

Returns: integer 返回值：整数

Example: floor(2.6)

Output: 2



percentage

Converts a floating point number into a percentage string. 将浮点型转换为百分比字符串
Parameters: number - a floating point number.

Returns: string

Example: percentage(0.5)

Output: 50%


round

Applies rounding. 四舍五入取整
Parameters:

number: A floating point number.
decimalPlaces: Optional: The number of decimal places to round to. Defaults to 0. 
Optional 可选

小数点位数，默认为0。 如果写1 就是1个小数点位置。

Returns: number

Example: round(1.67)

Output: 2

Example: round(1.67, 1)

Output: 1.7


sqrt

Calculates square root of a number. Keeps units as they are.
计算一个数的平方根，保持原有的单位。
Parameters: number - floating point number.

Returns: number

Example:

sqrt(25cm)
Output:

5cm
Example:

sqrt(18.6%)


Type Functions
isnumber

Returns true if a value is a number, false otherwise.
Parameters: value - a value or variable being evaluated.

Returns: true if value is a number, false otherwise.

Example:

isnumber(#ff0);     // false
isnumber(blue);     // false
isnumber("string"); // false
isnumber(1234);     // true
isnumber(56px);     // true
isnumber(7.8%);     // true
isnumber(keyword);  // false
isnumber(url(...)); // false


hsl

Creates an opaque color object from hue, saturation and lightness (HSL) values.
Parameters:

hue: An integer 0-360 representing degrees. 色调 色彩；色度；色调
saturation: A percentage 0-100% or number 0-1. 饱和度
lightness: A percentage 0-100% or number 0-1. 亮度
Returns: color

Example: hsl(90, 100%, 50%)

Output: #80ff00

This is useful if you want to create a new color based on another color's channel, forExample: @new: hsl(hue(@old), 45%, 90%);

@new will have @old's hue, and its own saturation and lightness.