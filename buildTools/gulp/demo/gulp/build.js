var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
// var plumber = require('gulp-plumber');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var connect = require('gulp-connect');
// var minifyCss = require('gulp-minify-css');
// var less = require('gulp-less');
// var imagemin = require('gulp-imagemin');
// var imageminJpegtran = require('imagemin-jpegtran');
// var pngquant = require('imagemin-pngquant');
// var notify = require('gulp-notify'); //提示消息
// var clean = require('gulp-clean'); //清理文件和文件夹
// var babel = require('gulp-babel'); //转义es6 或新的语法
// var inject = require('gulp-inject'); //注入
// var bowerFiles = require('main-bower-files'),
//     es = require('event-stream');

var $ = require('gulp-load-plugins')();



// 把单个文件打包到指定的地方
gulp.task('script', function() {
    // console.log(conf.paths.src);
    console.log(path.join(conf.paths.src, 'static/js/index.js'));

    gulp.src(path.join(conf.paths.src, 'static/js/index.js'))
        .pipe($.plumber())
        .pipe(gulp.dest(path.join(conf.paths.dist, 'static/js/')));
});

gulp.task('build', [
    'script'
]);