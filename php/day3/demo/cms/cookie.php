<?php


// setcookie("name","value");


// setcookie("color","red");
    // echo $_COOKIE["user1"];

    if (isset($_COOKIE["user1"])){
        echo "Welcome " . $_COOKIE["user1"] . "!<br />";
     }
    else{
        echo "user 已经过期<br />";
        setcookie("user1", "stark wang", time()+5);
    }


// print_r($_COOKIE);
 // echo $_COOKIE["your cookie name"];
