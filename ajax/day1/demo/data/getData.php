<?php
// if (账号和密码正确) {
//     echo 1;
// }else {
//     echo 0;
// }
// sleep(3);
$name = $_GET['name'];
$pwd = $_GET['pwd'];
// $name = $_POST['name'];
// $pwd = $_POST['pwd'];
if ($name == 'stark' && $pwd == 123) {
    echo 1;
}else {
    echo 0;
}
// echo 1;
