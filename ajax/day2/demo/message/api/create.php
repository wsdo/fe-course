<?php
require_once('db.php');
date_default_timezone_set("Asia/Shanghai");
// 获取前端给的数据
$title = $_POST['title'];
$content = $_POST['content'];
$created_time = time();
$status = 10;
$sql = "insert into message (
        title,
        content,
        created_time,
        status
    ) values (
        '{$title}',
        '{$content}',
        '{$created_time}',
        '{$status}'
    )";
$result = $dbh->exec($sql);
// 获取数据库最大的一条
$sql = "select * from message order by id desc limit 1";
foreach($dbh->query($sql) as $key => $value){
    $time = date("Y年m月d h:i:s", $value['created_time']);
    $arr = $value;
    $arr['created_time'] = $time;

}
// 规定一下api返回信息
// status 表示状态 1代表成功 0代表失败
// data 代表返回的数据
$msg = ['status' => 1,'data' => ''];

if ($result) {
    $msg['data'] = $arr;
    echo json_encode($msg);
}else {
    $msg['data'] = '数据存储失败！';
    $msg['status'] = 0;
    echo json_encode($msg);
}
// 存入到数据库
// 返回一个状态
