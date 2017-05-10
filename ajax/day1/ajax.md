AJAX不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术。
使用Javascript向服务器提出请求并处理响应而不阻塞用户！核心对象XMLHTTPRequest。

AJAX能做什么？
通过这个对象，您的 JavaScript 可在不重载页面的情况与Web服务器交换数据，即在不需要刷新页面的情况下，就可以产生局部刷新的效果。

AJAX 在浏览器与 Web 服务器之间使用异步数据传输（HTTP 请求），这样就可使网页从服务器请求少量的信息，而不是整个页面。


比如昨天讲的更新学习状态案列

当提交了以后，跳转到一个php文件，
在php 文件里面写了一个连接，指向你想跳转的页面，或者使用header 这种跳转。

    当用户登录的时候，直到登录完成之后才知道这个用户名存不存在。
我们学完ajax就不需要这么麻烦了，直接获取后端的数据来验证一下用户输入的用户名和密码是否正确，直接给提示，就不需要刷新或提交到另一个页面了。

## ajax
    ```
    第一步 要 new 一个对象 XMLHttpRequest();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        // readyState 这个是状态
        // 0: 请求未初始化
        // 1: 服务器连接已建立
        // 2: 请求已接收
        // 3: 请求处理中
        // 4: 请求已完成，且响应已就绪
        if (xhr.readyState == 4) {
            // console.log("已经读取完毕");

            text.innerHTML =  xhr.responseText;
            console.log(xhr.responseText);
        }
    }

    xhr.open("get","data/2.php",true);
    xhr.send(null);
    ```

## 第一步 创建对象
    要 new 一个对象 XMLHttpRequest();
    var xhr = new XMLHttpRequest();

    如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

## 第二步 像服务器发送一个请求

    使用 XMLHttpRequest 对象的 open() 和 send() 方法像服务器发送请求

### open(method,url,async)
    规定请求的类型、URL 以及是否异步处理请求。
    参数一：method：请求的类型；GET 或 POST
    参数二：url：文件在服务器上的位置
    参数三：async：true（异步）或 false（同步）
    异步代码会被放入一个事件队列，等到所有其他代码执行后才进行，而不会阻塞线程。

    // 异步 非阻塞
    // 不用等待前面执行完然后才执行后面的代码

    同步： 阻塞
        必须等待到服务器执行完后再让后面的代码执行

    send(string)
    将请求发送到服务器。
    string：仅用于 POST 请求

    GET 还是 POST？
    与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
    然而，在以下情况中，请使用 POST 请求：
    无法使用缓存文件（更新服务器上的文件或数据库）
    向服务器发送大量数据（POST 没有数据量限制）
    发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

    GET 方式传参
        xhr.open("get","data/login.php?name=stark&pwd=123",true);

        在open 方法中第二个参数 后面接上         data/login.php?name=stark&pwd=123

        ?开始
        以key=value这种形式 key=value&pwd=123
        使用&符合拼接起来

        在php 中就可以使用 $_GET来接收这个传输的参数

    POST 方式传参

    ```
    xhr.open("POST","/try/ajax/demo_post2.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("fname=Henry&lname=Ford");
    ```

    setRequestHeader(header,value)
    向请求添加 HTTP 头。
    header: 规定头的名称
    value: 规定头的值

    和get传的参数一样

    ?开始
    以key=value这种形式 key=value&pwd=123
    使用&符合拼接起来

    拼接起来使用send()传输
        xhr.send("fname=Henry&lname=Ford");


## onreadystatechange 事件
当请求被发送到服务器时，我们需要执行一些基于响应的任务。
每当 readyState 改变时，就会触发 onreadystatechange 事件。
readyState 属性存有 XMLHttpRequest 的状态信息。
下面是 XMLHttpRequest 对象的三个重要的属性：

### onreadystatechange
    存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。

### readyState
    存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    0: 请求未初始化
    1: 服务器连接已建立
    2: 请求已接收
    3: 请求处理中
    4: 请求已完成，且响应已就绪

### status：
    200: "OK"
    404: 未找到页面

    HTTP状态码
    当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。
    HTTP状态码的英文为HTTP Status Code。
    下面是常见的HTTP状态码：
    200 - 请求成功
    301 - 资源（网页等）被永久转移到其它URL
    404 - 请求的资源（网页等）不存在
    500 - 内部服务器错误

    304 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源

### http 状态码分类
    1**	信息，服务器收到请求，需要请求者继续执行操作
    2**	成功，操作被成功接收并处理
    3**	重定向，需要进一步的操作以完成请求
    4**	客户端错误，请求包含语法错误或无法完成请求
    5**	服务器错误，服务器在处理请求的过程中发生了错误

看到2** 这个是成功的，
看到3** 这个也是成功的，
看到4** 表示自己这有些问题
看到5** 给后端哥哥说，你的接口有问题
