<?php
// 获取表单提交的数据
require_once("db.php");
$post = $_POST;
$status = $post['status'];
$username = $_SESSION['name'];
// 更新一下用户的状态

$sql = "update user set status = {$status} where name = '{$username}'";
// 执行这个sql语句
$dbh->exec($sql);

$_SESSION['status'] = $status;

header("Location:index.php");
