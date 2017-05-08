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
// echo $sql;
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
