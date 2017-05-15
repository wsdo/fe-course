1.数组最后一个值，加不加逗号都可以，但是加上逗号为了后面更改的时候，预防出错，要求规范必须加上逗号！

json_encode
在php中用来把数组转化成json字符串，给前端使用！在写api的时候用到
在php中用什么方式把数组转换成字符串 json_encode

模板引擎有什么作用？
为了解决在js使用字符串拼接大量的dom，使用很多 +''+ 造成了写代码繁琐冗余问题，使用了模板引擎就可以在html 里面写正常的dom结构，用模板引擎的方法替换一下就好。

什么是模板引擎，说的简单点，就是一个字符串中有几个变量待定，通过模板引擎函数把数据塞进去。

```
var str = "李白就是一个@libai@，安琪拉是一个@aiqila@，刘先生是一个@liuxiansen@";

var obj = {
    libai : '诗人',
    aiqila : '美女',
    liuxiansen : '程序员'
}
function templete(str, obj){
  // 第一个return 就是返回函数的结果
    return str.replace(/\@([a-z]+)\@/g,function(match,$1){
        // 第二个return 是replace 必须返回的
          return obj[$1];
    })

    str.replace(/\@([a-z]+)\@/g,'stark');
}
```



```
<tr>
  <td>@name@</td>
  <td>@title@</td>
  <td>@content@<</td>
  <td>@createdtime@</td>
</tr>

var html =
'<tr>\
    <td>'+msg.id+'</td>\
    <td>'+msg.username+'</td>\
    <td>'+msg.title+'</td>\
    <td>'+msg.content+'</td>\
    <td>'+msg.created_time+'</td>\
</tr>';


result:

<tr>
       <td>stark</td>
       <td>helloworld</td>
       <td>你好哈哈哈<</td>
       <td>2017年5月12日11:53:53</td>
</tr>
```

str.replace

参数一 match
  代表正则里面匹配到的东西
参数二 $1
  代表正则里面第一个单位()
