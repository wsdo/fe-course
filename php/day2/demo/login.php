<?php
require_once("db.php");
$post = $_POST;
$name = $post['name'];
$password = $post['password'];

$sql = "select * from user where name = '{$name}'";
// select * from user where name =wsd
// select * from user where name = 'wsd'
// echo $sql;
$select = $dbh->query($sql);
if(empty($select)){
    echo "用户名不存在";
    return false;
}
    $user = [];
   foreach ($select as $row) {
    //    print_r($row);
       $user = $row;
   }
echo "<pre>";
// print_r($user);
$dbpassword = $user['password'];

if (md5($password) == $dbpassword) {
    echo "登录成功！";
    $_SESSION['name'] = $user['name'];
    $_SESSION['status'] = $user['status'];
    print_r($_SESSION);

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
    $status = [
        1 => '非常明白',
        2 => '一般明白',
        3 => '明白',
        4 => '懵逼',
        5 => '非常懵逼',
        6 => '跳楼'
    ];
    echo "此刻的状态".$status[$_SESSION['status']];
}else{
    echo "密码错误";
}
