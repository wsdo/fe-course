<?php
// array_keys — 返回数组中部分的或所有的键名
// 把返回的key名放在一个数组返回
// $array = array(0 => 100, "color" => "red");
$array = [0 => 100, "color" => "red"];
print_r(array_keys($array)); //Array ( [0] => 0 [1] => color )
//
// $array = array("blue", "red", "green", "blue", "blue");
// print_r(array_keys($array, "blue"));
//
// $array = array("color" => array("blue", "red", "green"),
//                "size"  => array("small", "medium", "large"));
// print_r(array_keys($array));
