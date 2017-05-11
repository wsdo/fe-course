<?php
require_once('db.php');
date_default_timezone_set("Asia/Shanghai");

$sql = 'select id, title, content, created_time from message order by id asc';
$select = $dbh->query($sql);
$arr = [];
foreach ($select as $key => $value) {
    $time = date("Y年m月d h:i:s", $value['created_time']);
    $arr['message'][$key] = $value;
    $arr['message'][$key]['created_time'] = $time;
}
echo json_encode($arr);
