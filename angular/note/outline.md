表单
指令
service
route

利用gulp搭建一个angularjs项目

mvc 架构
build （dev）
    用于开发环境
    watch  开发的时候 
        时候监听 自动刷新
        热更新

dist
    data
        index.json
    index.html
    view
    static
        js
            all.min.js
            bundle.js
        style
            bundle.css
src
    data
    image

    script
        controller
            ActivityCtrl.js
            DashboardCtrl.js
            MemberCtrl.js
        diractive
            common
                head.js 头部的一些信息

            Hello.js 
        service
            MemberService.js  //负责管理api
        app.js
        route.js
    view 
        activity
            activity.html
            index.html
            desc.html
        member
            list.html
            userinfo.html
        index.html
gulpfile.js
readme.md



第一步：规定好目录结构
入口文件 app.js  
index.html
    ng-view 负责把路由里面的视图都生成在这里

    bundle.js 负责所有的库  所有的类库
    all.js  这个打包后的文件，一般是自己开发的文件

分层：
    script

        service 
            负责管理所有的api 就是m层
        controller 
            负责写所有的业务逻辑
        diractive
            负责写一些指令
        app.js
        route.js
    view
        home
        member
            member.html
    static
        image
        style
            index.scss
            common.scss
            home.scss
            base.css
                -
                md-col-6
                right { float:right}

        负责写所有的视图 

<div ng-view></div>
ng-view 就是把所有路由里面指定的页面 放在这










组件化的方式
dist
    data
        index.json
    index.html
    view
    static
        js
            all.min.js
            bundle.js
        style
            bundle.css

src
    data
    image

    script
        components
            activity
                ActivityCtrl.js  控制器
                Activity.html  视图文件
                Activity.scss  scss
                Activity.spec.js    测试文件
                Act.diractive.js  指令

            home
                HomeCtrl.js  控制器
                Home.html  视图文件
                Home.scss  scss
                Home.spec.js    测试文件
                Home.diractive.js  指令
        app.js
        route.js
    view
gulpfile.js
readme.md
