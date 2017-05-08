<?php
    // session_start();
    require_once('db.php');
    // echo $_SESSION;
    // print_r($_SESSION);
    print_r($_SESSION);

    var_dump(empty($_SESSION));

    if (empty($_SESSION)) {
        echo '你还没有登录去登录吧！';
        header("Location:login.html");
        return false;
    }
 ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">首页</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">论坛 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">博客</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">用户名：<?php
                    echo $_SESSION['name'];
                 ?> </a></li>
                 <li><a href="logout.php">退出登录</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="logout.php">退出登录</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>

        <div class="container">
        学习的状态:
        <form class="" action="diaocha.php" method="post">

            <div class="radio">
            <label for="field_1">
                <input id="field_1" type="radio" name="status" value="1">
                非常明白
            </label>
        </div>
            <div class="radio">
            <label for="field_2">
                <input id="field_2" type="radio" name="status" value="1">
                比较明白
            </label>
        </div>
            <div class="radio">
            <label for="field_3">
                <input id="field_3" type="radio" name="status" value="1">
                一般明白
            </label>
        </div>
            <div class="radio">
            <label for="field_4">
                <input id="field_4" type="radio" name="status" value="1">
                懵逼
            </label>
        </div>
            <div class="radio">
            <label for="field_5">
                <input id="field_5" type="radio" name="status" value="1">
                非常懵逼
            </label>
        </div>
            <div class="radio">
            <label for="field_6">
                <input id="field_6" type="radio" name="status" value="1">
                跳楼
            </label>
        </div>
        <!-- <input type="submit" name="" value=""> -->
        <button type="submit" class="btn btn-default">提交</button>
        </form>
        </div>
    </body>
</html>
