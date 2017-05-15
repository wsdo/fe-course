<?php
// 这个注释是为了方便大家看
// /demo/api/jsonpcallback.php?jsoncallback=starks
// jsoncallback 是get 传惨
// jsoncallback=starks&name=stark
$callbackname = $_GET['jsoncallback'];
$arr = array(
  'name' => "srark",
  "age" => 18,
  "msg" => "现在我们学习jsonp原理"
);
echo $callbackname."(".json_encode($arr).")";
