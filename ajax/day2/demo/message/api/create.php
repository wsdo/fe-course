<?php
require_once('db.php');
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

// 规定一下api返回信息
// status 表示状态 1代表成功 0代表失败
// data 代表返回的数据
$msg = ['status' => 1,'data' => ''];

if ($result) {
    $msg['data'] = '数据存储成功！';
    echo json_encode($msg);
}else {
    $msg['data'] = '数据存储失败！';
    $msg['status'] = 0;
    echo json_encode($msg);
}
// 存入到数据库
// 返回一个状态
