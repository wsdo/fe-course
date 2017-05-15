<?php
require_once("db.php");

$post = $_POST;
$name = $post['name'];
$age = $post['age'];
$sex = $post['sex'];
$email = $post['email'];
$password = $post['password'];
$password = md5($password);

$insertsql = "insert into user (
            name,
            age,
            password,
            email,
            sex
    ) values (
            '{$name}',
            '{$age}',
            '{$password}',
            '{$email}',
            '{$sex}'
        )";
// 调试方法：把这个sql语句打印出来在Navicat里面的查询编辑里
// 面执行这个sql语句看看有没有报错，如果报错了根据错误去排查。
echo $insertsql;
$result = $dbh->exec($insertsql);
print_r($result);
echo "注册成功";
// print_r($post);

$sql = 'SELECT * FROM user';// sql 语句 查
// $select = $dbh->query($sql); //pdo查询语法
   foreach ($dbh->query($sql) as $row) {
       echo "<pre>";
       echo "以下用户注册成功！";
       print_r($row['name']);

   }

   // 内网： 192.168.30.110
