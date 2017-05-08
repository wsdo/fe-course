<?php
// mysql
// 链接数据库
// 连接是通过创建 PDO 基类的实例而建立的。
// 不管使用哪种驱动程序，都是用 PDO 类名。
// 构造函数接收用于指定数据库源（所谓的 DSN）以及可能还包括用户名和密码（如果有的话）的参数。
//
// Example #1 连接到 MySQL
header("Content-type: text/html; charset=utf-8");
$user = "root";
$pass = "";
$host = 'localhost';
$dbh = new PDO('mysql:host='.$host.';dbname=fe7', $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8'));
print_r($dbh);

$sql = 'SELECT * FROM user';
$select = $dbh->query($sql);
print_r($select);
   foreach ($dbh->query($sql) as $row) {
       print $row['name'] . "\t";
       print $row['age'] . "\t";
       print $row['sex'] . "\n";
   }

// 如果出现
// 如果是一个空对象证明链接成功了
// PDO Object ( )
// 如果出现
 // Access denied for user
 // 用户拒绝访问

 // Fatal error: Uncaught exception 'PDOException'
 // with message 'SQLSTATE[HY000] [1045] Access denied for
 // user 'root'@'localhost' (using password: YES)'
 // in D:\web7\shangke\php\day2\demo\02.lian_jie_shu_ju_ku.php
 // :13 Stack trace: #0 D:\web7\shangke\php\day2\demo\02.
 // lian_jie_shu_ju_ku.php(13): PDO->__construct('mysql:hos
 // t=loca...', 'root', 'wsd') #1 {main} thrown in D:\web7\
 // shangke\php\day2\demo\02.lian_jie_shu_ju_ku.php on line
 //  13
