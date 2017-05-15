<?php
    require_once('./api/db.php');
    // var_dump(empty($_SESSION));
    // empty 判断是否为空
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
        <style media="screen">
        table,tr,td{
            border: 1px solid #000;
        }
        td{
            height: 10px;
            /*width: 200px;*/
        }
        </style>
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
                <li class="active"><a href="#">留言板<span class="sr-only">(current)</span></a></li>
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
                 <li><a href="#">
                     <?php
                     echo "此刻的状态".$status[$_SESSION['status']];
                     ?>
                 </a></li>
                 <li><a href="logout.php">退出登录</a></li>

              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>

        <div class="container">

          <div class="">
              标题：<input id="title" type="text" name="title" value
          </div>
          <div class="">
              留言内容
              <textarea id="content" name="name" rows="8" cols="80"></textarea>
          </div>
        <!-- </form> -->
        <div class="">
          <button  id="submit">提交留言 </button>
        </div>
        <div class="content">
            <table  id="msg">
                <!-- <tr>
                    <td>id</td>
                    <td>用户名</td>
                    <td>留言标题</td>
                    <td>留言内容</td>
                </tr> -->
            </table>
        </div>

        </div>
    </body>
    <script src="jquery.js" charset="utf-8"></script>
    <script src="js/ajax.js" charset="utf-8"></script>
    <script type="text/javascript">
        $("#submit").click(function(){
            // 获取标题
            var title =  $("#title").val();
            var content = $("#content").val();

                    // console.log(title);
                    // console.log(content);
            sajax.post("api/create.php",{title:title,content:content},function(data,err){
                // console.log(data);
                var obj = JSON.parse(data.data);
                console.log(obj.data);
                var msg = obj.data;
                // var html = '';
                if (data.status == 1) {
                    alert("提交留言成功");
                    var html =
                    '<tr>\
                        <td>'+msg.id+'</td>\
                        <td>'+msg.username+'</td>\
                        <td>'+msg.title+'</td>\
                        <td>'+msg.content+'</td>\
                        <td>'+msg.created_time+'</td>\
                    </tr>';
                    $("#msg").append(html);
                // getMessage();

                }else {
                    alert("提交留言失败");
                }
            })
        })
        // 获取留言内容



        var getMessage = function(){
            sajax.post('api/read.php',{},function(data,err){
                // console.log(data);
                var obj = JSON.parse(data.data);
                // console.log(obj);
                var html =
                '<tr>\
                    <td>第几条</td>\
                    <td>用户名</td>\
                    <td>留言标题</td>\
                    <td>留言内容</td>\
                    <td>留言时间</td>\
                </tr>';
                $.each(obj.message,function(index, value){
                    // console.log(value['content']);

                    html +=
                    '<tr>\
                        <td>'+value.id+'</td>\
                        <td>'+value.username+'</td>\
                        <td>'+value.title+'</td>\
                        <td>'+value.content+'</td>\
                        <td>'+value.created_time+'</td>\
                    </tr>';


                })

                $("#msg").append(html);
            })
        }
        getMessage();
        // 发送到后端
    </script>
</html>
