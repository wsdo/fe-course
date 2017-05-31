开头
html4
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 

html5
<!DOCTYPE html>
不支持ie6 和 ie7

查看浏览器是否支持某些元素
http://caniuse.com

HTML5 中新的提纲和节段元素一览: 

<section>, <article>, <nav>, <header>, <footer>, <aside> 和 <hgroup>.

除了节段，媒体和表单元素之外，还有众多的新元素，例如 
<mark>， <figure>， <figcaption>， <data>， <time>， <output>， <progress>， 或者 <meter>和<main>，这增加了有效的 HTML5 元素的数量。



novalidate 
在form 框上面添加这个属性 就可以不验证所有的input规则

autofocus 
autofocus 属性是一个 boolean 属性.
autofocus 属性规定在页面加载时，域自动地获得焦点。

form 属性规定输入域所属的一个或多个表单。
提示:如需引用一个以上的表单，请使用空格分隔的列表。

The formaction 属性用于描述表单提交的URL地址.
The formaction 属性会覆盖<form> 元素中的action属性.
注意: The formaction 属性用于 type="submit" 和 type="image".

<input> multiple 属性
multiple 属性是一个 boolean 属性.
multiple 属性规定<input> 元素中可选择多个值。
注意: multiple 属性适用于以下类型的 <input> 标签：email 和 file:


<input> pattern 属性
pattern 属性描述了一个正则表达式用于验证 <input> 元素的值。
注意:pattern 属性适用于以下类型的 <input> 标签: text, search, url, tel, email, 和 password.
提示： 是用来全局 title 属性描述了模式.

<input> placeholder 属性
placeholder 属性提供一种提示（hint），描述输入域所期待的值。
简短的提示在用户输入值前会显示在输入域上。
注意: placeholder 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email 以及 password。

<input> required 属性
required 属性是一个 boolean 属性.
required 属性规定必须在提交之前填写输入域（不能为空）。
注意:required 属性适用于以下类型的 <input> 标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file。

<input> formtarget 属性
formtarget 属性指定一个名称或一个关键字来指明表单提交数据接收后的展示。
The formtarget 属性覆盖 <form>元素的target属性.
注意: formtarget 属性与type="submit" 和 type="image"配合使用.

<input> formnovalidate 属性
novalidate 属性是一个 boolean 属性.
novalidate属性描述了 <input> 元素在表单提交时无需被验证。
formnovalidate 属性会覆盖 <form> 元素的novalidate属性.
注意: formnovalidate 属性与type="submit一起使用