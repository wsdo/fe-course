<?php
// require 和 include 几乎完全一样，除了处理失败的方式不同之外。
// require 在出错时产生 E_COMPILE_ERROR 级别的错误。
// 换句话说将导致脚本中止而 include 只产生警告（E_WARNING），
// 脚本会继续运行。

// require_once 语句和 require 语句完全相同，
// 唯一区别是 PHP 会检查该文件是否已经被包含过，
// 如果是则不会再次包含。
// require("./src1.php");
// require("./src1.php");
// include("./src1.php");
// include("./src1.php");
require_once("./src1.php");
require_once("./src1.php");
