<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>表单提交</title>
    </head>
    <body>
        <!-- form action 的参数是url地址，就是提交数据的地址 -->
        <!-- method 是选择提交的方式 可以选择 post get -->
        <!-- get 是明文传输 它有传输字符限制 -->
        <!-- post 不是明文传输 像登录这种业务必须使用 post -->
        <form action="login.php" method="post">
             <p>用户名: <input type="text" name="name" /></p>
             <p>密码: <input type="password" name="password" /></p>
             <p>提交<input type="submit" /></p>
        </form>
    </body>
</html>
