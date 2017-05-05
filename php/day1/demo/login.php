<?php
$post = $_POST;
print_r($post);
// print_r($post);

$login_info = "恭喜".$post['name']."登录成功！";
echo $login_info;
