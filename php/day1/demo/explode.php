<?php
// 使用一个字符串分割另一个字符串 返回数组
$pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
print_r($pieces);
echo $pieces[0]; // piece1
echo $pieces[1]; // piece2
