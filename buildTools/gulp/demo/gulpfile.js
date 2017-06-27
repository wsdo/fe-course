var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

// 把单个文件打包到指定的地方
// gulp.task('script', function() {
//     gulp.src('./src/static/js/index.js')
//         .pipe(plumber())
//         .pipe(gulp.dest('./dist/static/js/'));
// });



// 把两个文件打包到指定的地方
// gulp.task('script', function() {
//     gulp.src(['./src/static/js/index.js', './src/static/js/stark.js'])
//         .pipe(plumber())
//         .pipe(gulp.dest('./dist/static/js/'));
// });

// 把多个文件打包到指定的地方
// gulp.task('script', function() {
//     gulp.src('./src/static/js/*.js')
//         .pipe(plumber())
//         .pipe(gulp.dest('./dist/static/js/'));
// });


// 把多个文件打包到指定的地方并且合并
// gulp.task('script', function() {
//     gulp.src('./src/static/js/*.js')
//         .pipe(plumber())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/static/js/'));
// });


// 把多个文件打包到指定的地方并且合并 并且生成一个压缩文件
gulp.task('script', function() {
    gulp.src('./src/static/js/*.js')
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/static/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/static/js/'))
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload()); //实时加载
});

gulp.task('watch', function() {
    gulp.watch(['./src/*.html'], ['html']);
});

// 启动一个服务
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8001,
        livereload: true
    });
});


gulp.task('default', ['connect', 'watch', 'html', 'script']);