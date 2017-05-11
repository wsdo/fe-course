<?php
$name = $_POST['name'];
$age = $_POST['age'];

if ($name == 'stark' && $age == 18) {
    echo 1;
}else {
    echo 0;
}
