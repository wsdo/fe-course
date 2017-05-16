<?php
if (!empty($_GET['page'])) {
  $page = $_GET['page'];
}else {
  $page = 2;
}

if (!empty($_GET['pre_page'])) {
  $pre_page = $_GET['pre_page'];
}else {
  $pre_page = 2;
}

$url = "http://api.shudong.wang/v1/db.php?page=".$page."&pre_page=".$pre_page;
echo $data = file_get_contents($url);
// echo json_decode($data);
