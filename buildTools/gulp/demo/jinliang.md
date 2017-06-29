## 首先介绍一下gulp
    gulp 是工程化的开发工具，个人理解为机械的批量管理代码用的。用于打包、压缩、检测等等。


## 使用的基本条件

### 1.全局安装gulp：
    $   npm install --global guip

### 2.作为项目的开发依赖安装：
    $   npm install --save-dev gulp

### 3.在项目根目录下创建一个名为 gulpfile.js 文件，并添加以下内容：
```
    var gulp = require('gulp');
    gulp.task("default", function() {
        // 将你的默认代码放在这
    })
```

### 4.运行gulp
    $   gulp    

## 前期工作已经做得差不多了，现在开始看看 gulp 的使用方法吧

### 1.npm init初始化得到package.json文建里面记录npm的信息主要是下载过什么插件（可用作检查插件是否安装成功）。

### 3.在gulp里要执行的任务都是需要用插件的
    $   npm i (填入想要使用的插件名) --save-dev
    这条命令--save-dev可以让 package.json记录下载插件的名字及版本。

### 4.下载完毕后，想要使用该插件需要在 gulpfile.js 文件内先调用：
```
    var 任务名 = require(" 下载的插件名 ");
```

### 5.调用插件后开始执行任务
```
    gulp.task(' 人物名 ', function() {
        gulp.src(' 任务对象路径 ')
            .pipe( 任务名 (' 需要执行具体的任务内容 '))
            .pipe(gulp.dest(' 任务执行完毕编译后的对象路径 '))
    })
```
    上述代码中 gulp.task 代表开始执行任务； gulp.src 代表源文件路径； .pipe 管道（执行任务的媒介）； gulp.dest 代表目标放置路径

### 6.最后一步就是在命令行内输入 ： gulp + 空格 + （任务名）； 或者也可以选择在 default任务中添加你需要执行的任务。以数组模式呈现：
```
    gulp.task("default", function() {
        [任务1，任务2，任务3，...,任务n]
    })
```
如果你选择用后这进行任务，在命令行中只需执行 gulp 指令即可

## 学到这里你已经可以进行 gulp 的代码编译工作了，BUT 你慢慢就会发现，以上述方法进行代码编译会越来越艰难，为什么呢？因为你每一次的使用一个插件，就要进行一次调用以及使用，十分麻烦，有没有优化的方法呢？当然有！！


### 接下来介绍 gulp-load-plugins 插件

调用方式：var $=require('gulp-load-plugins')(),

使用方式：$.rename,//重命名

$.uglify;//压缩JS文件(es6的内容会报错)

$.minifyCss;//压缩css文件

$.minifyHtml;//压缩html文件

$.jshint;//检查js代码

$.concat;//文件合并

$.livereload;//实时刷新

$.connect;//服务

$.inject;//自动引入文件

$.mainBowerFiles;//精确定位

$.gulp-imagemin;//图片压缩

$.imagemin-pngquant;//png图片压缩插件

## 监控并自动刷新
```
    var gulp = require('gulp'),
    connect = require('gulp-connect');
    
    gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
    });
    
    gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
    });
    
    gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    });
    
    gulp.task('default', ['connect', 'watch']);
```

## 插件的简单介绍

gulp还有很多插件，感兴趣或有需要可以根据下面链接查看用法

### 流控制

event-stream 事件流，不是插件但很有用
gulp-if 有条件的运行一个task
gulp-clone Clone files in memory in a gulp stream 非常有用
vinyl-source-stream Use conventional text streams at the start of your gulp or vinyl pipelines
AngularJS

gulp-ng-annotate 注明依赖 for angular
gulp-ng-html2js html2js for angular
gulp-angular-extender 为angular module添加dependencies
gulp-angular-templatecache 将html模板缓存到$templateCache中
### 文件操作

gulp-clean 删除文件和目录, 请用del来代替它Example
gulp-concat 合并文件
gulp-rename 重命名文件
gulp-order 对src中的文件按照指定顺序进行排序
gulp-filter 过滤文件 非常有用 Example
gulp-flatten 当拷贝文件时，不想拷贝目录时使用 segmentfault
### 压缩

gulp-clean-css压缩css
gulp-uglify 用uglify压缩js
gulp-imagemin 压缩图片
gulp-htmlmin 压缩html
gulp-csso 优化CSS
### 工具

gulp-load-plugins 自动导入gulp plugin
gulp-load-utils 增强版gulp-utils
gulp-task-listing 快速显示gulp task列表
gulp-help 为task添加帮助描述
gulp-jsdoc 生成JS文档
gulp-plumber Prevent pipe breaking caused by errors from gulp plugins Example
yargs 处理 process.argv
run-sequence 顺序执行 gulp task，gulp 4.0 已经支持该功能 gulp.series(...tasks)
gulp-notify gulp plugin to send messages based on Vinyl Files
gulp-shell 非常有用
gulp-grunt 在gulp中运行grunt task
### JS/CSS自动注入

gulp-usemin Replaces references to non-optimized scripts or stylesheets into a set of HTML files
gulp-inject 在HTML中自动添加style和script标签 Example
wiredep 将bower依赖自动写到index.html中 Example
gulp-useref 功能类似与usemin Example 新版本用法有变化，详见gulp-useref的README.md
### 代码同步

browser-sync 自动同步浏览器，结合gulp.watch方法一起使用 Example 1 Example 2
gulp-nodemon server端代码同步
Transpilation

gulp-babel 将ES6代码编译成ES5 Example
babelify Browserify transform for Babel
gulp-traceur Traceur is a JavaScript.next-to-JavaScript-of-today compiler
### 打包

gulp-browserify 用它和 babelify 实现ES6 module Example
### 编译

gulp-less 处理less Example
gulp-sass 处理sass
### 代码分析

gulp-jshint JSHint检查 Example
gulp-jscs 检查JS代码风格 Example
### 特别推荐

gulp-changed 只传输修改过的文件
gulp-cached 将文件先cache起来，先不进行操作
gulp-remember 和gulp-cached一块使用
gulp-newer pass through newer source files only, supports many:1 source:dest
### 其他

webpack-stream gulp与webpack Example
gulp-autoprefixer Prefix CSS
gulp-sourcemaps 生成source map文件
gulp-rev Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css
gulp-rev-replace Example
gulp-iconfont 制作iconfont Example
gulp-svg-symbols 制作SVG Symbols, 关于使用SVG Symbol
gulp-template 模板替换
gulp-dom-src 将html中的script，link等标签中的文件转成gulp stream。
gulp-cheerio Manipulate HTML and XML files with Cheerio in Gulp.
require-dir 利用它我们可以将 gulpfile.js 分成多个文件，具体用法可以参考这个Splitting a gulpfile into multiple files
gulp-nodemon 强烈推荐, 监控你的node应用,并重现启动server