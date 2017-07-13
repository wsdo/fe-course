<template>
    <div>
  <nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!--当你切换到移动端或屏幕比较小的时候显示的logo-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
                <!--显示在页面的logo-->
                <a class="navbar-brand" href="#">FE7</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <router-link to="/home" tag="li"> <a> 首页 </a></router-link> <span class="sr-only">(current)</span>
                    <router-link to="/learn" tag="li"> <a> 学习 </a> </router-link>
                    <router-link to="/bbs" tag="li"> <a> 论坛 </a> </router-link>
                    <router-link to="/blog" tag="li"> <a> 博客 </a> </router-link>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">二级导航 <span class="caret"></span></a>
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
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户信息 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">用户资料</a></li>
                            <li><a href="#">个人积分</a></li>
                            <li><a href="#">购买的东西</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">登出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
        <!-- router-link -->

        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
    }
  }
</script>

<style>

</style>