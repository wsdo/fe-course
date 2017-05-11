<?php
require_once("connect.php");
$get = $_GET;
$message = $get['message'];

$ia = "insert into content(
				message
			)values(
				'{$message}'
			)";
$result = $dbh -> exec($ia);

print_r($result);

