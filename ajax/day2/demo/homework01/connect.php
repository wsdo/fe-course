<?php
/*header("Content-type: text/html; charset=utf-8");
$user = "root";
$pass = "";
$host = "localhost";
$dbname = "message" ;//数据库名字
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');
$dbh = new PDO('mysql:host'.$host';dbname='.$dbname, $user ,$pass ,$utf8);
// print_r( $dbh);

header("Content-type: text/html; charset=utf-8");
session_start();*/
$user = "root";//数据库用户名
$pass = "";//数据库密码
$host = "localhost";//主机地址
$dbname = "fe7";//数据库名字
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');//编码
$dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user ,$pass ,$utf8);//连接