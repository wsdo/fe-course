git pull  拉下代码
git fetch origin 获取所有分支的代码
git checkout zhengze 切换分支

前面讲了，正则表达式中的所有字母 ，汉字，数字
都是按照字面含义进行匹配的

console.log(str.match(/bb/g));
js正则表达式语法也支持非字母，汉子，数字 的字符匹配，
这些字符需要通过反斜线(\) 作为前缀进行转义。

\n  /\n/ 回车符
\t  /\t/ 制表符 就是 tab
