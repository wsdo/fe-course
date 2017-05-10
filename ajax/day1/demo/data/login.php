<?php
// if (账号和密码正确) {
//     echo 1;
// }else {
//     echo 0;
// }

$name = $_GET['name'];
$pwd = $_GET['pwd'];
if ($name == 'stark' && $pwd == 1123) {
    echo 1;
}else {
    echo 0;
}
// echo 1;
