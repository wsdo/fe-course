var gulp = require('gulp');
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
// gulp.task('script', function() {
//     gulp.src('./src/static/js/*.js')
//         .pipe(plumber())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/static/js/'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist/static/js/'))
//         .pipe(connect.reload());
// });

// gulp.task('html', function() {
//     gulp.src('./src/*.html')
//         .pipe(plumber())
//         .pipe(gulp.dest('./dist'))
//         .pipe(connect.reload()); //实时加载
// });

// gulp.task('css', function() {
//     gulp.src('./src/static/css/*.css')
//         .pipe(plumber())
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('./dist/static/css'))
//         .pipe(rename('all.min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest('./dist/static/css'))
//         .pipe(connect.reload());
// })
// gulp.task('watch', function() {
//     gulp.watch(['./src/*.html'], ['html']);
//     gulp.watch(['./src/static/css/*.css'], ['css']);
//     gulp.watch('./src/static/js/*.js', ['script']);
// });

// // 启动一个服务
// gulp.task('connect', function() {
//     connect.server({
//         root: 'dist',
//         port: 8001,
//         livereload: true
//     });
// });

// gulp.task('copy-image', function() {
//     gulp.src('./src/static/image/*')
//         .pipe(imagemin({
//             // progressive: true, // 无损压缩JPG图片
//             svgoPlugins: [{ removeViewBox: false }], // 不移除svg的viewbox属性
//             use: [pngquant()] // 使用pngquant插件进行深度压缩
//         }))
//         // .pipe(imagemin())

//     .pipe(gulp.dest('./dist/static/img'))

// })

// // less 编译
gulp.task('transformLess', function() {
    gulp.src("./src/static/css/*.less")
        .pipe($.less())
        .pipe(gulp.dest("./dist/static/css"))

})

// gulp.task('msg', function() {
//     gulp.src("./src/static/js/index.js")
//         .pipe(notify("Hello Gulp!"));
// })

gulp.task('msg', function() {
    gulp.src("./src/static/js/index.js")
        .pipe($.notify("Hello Gulp!"));
})

// gulp.task('clean', function() {
//     return gulp.src('./dist/', { read: false })
//         .pipe(clean());
// });



// gulp.task('babel', () => {
//     return gulp.src('src/static/js/1.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('./dist/static/js'));
// });


// gulp.task('inject', function() {
//     var target = gulp.src('./src/index.html');
//     // It's not necessary to read the files (will speed up things), we're only after their paths: 
//     var sources = gulp.src(['./src/static/**/*.js', './src/static/**/*.css'], { read: false });

//     return target.pipe(inject(sources))
//         .pipe(gulp.dest('./dist'));
// });


// gulp.task('bower', function() {
//     var cssFiles = gulp.src('./src/static/**/*.css')
//         // .pipe(stylus())
//         .pipe(gulp.dest('./dist'));

//     gulp.src('./src/index.html')
//         .pipe(inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
//         .pipe(inject(es.merge(
//             cssFiles,
//             gulp.src('./src/static/**/*.js', { read: false })
//         )))
//         .pipe(gulp.dest('./dist'));

// })


gulp.task('default', [
    'clean',
    'connect',
    'watch',
    'html',
    'script',
    'css',
    'copy-image',
    'transformLess',
]);