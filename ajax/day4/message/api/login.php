<?php
require_once("db.php");
$post = $_POST;
$name = $post['name'];
$password = $post['password'];

$sql = "select * from user where name = '{$name}'";
// select * from user where name =wsds
// select * from user where name = 'wsd'
// echo $sql;
$select = $dbh->query($sql);

$user = [];
    foreach ($select as $row) {
       $user = $row;
    }

    if(empty($user)){
       echo "用户名不存在";
       echo "<a href='login.html'>返回登录</a>";
       return false;
    }

    echo "<pre>";
// print_r($user);
$dbpassword = $user['password'];

if (md5($password) == $dbpassword) {
    echo "登录成功！";
    $_SESSION['id'] = $user['id'];
    $_SESSION['name'] = $user['name'];
    $_SESSION['status'] = $user['status'];
    print_r($_SESSION);
    // 跳转到首页
    header("Location:../index.php");
    // switch (variable) {
    //     case 'value':
    //         # code...
    //         break;
    //
    //     default:
    //         # code...
    //         break;
    // }

    // 表驱动法

    echo "此刻的状态".$status[$_SESSION['status']];
}else{
    echo "密码错误";
    echo "<a href='login.html'>返回登录</a>";
}
