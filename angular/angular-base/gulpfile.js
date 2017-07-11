var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var open = require('open');

//定义路径
var app = {
    devPath: './bulid/',
    distPath: './dist/',
    srcPath: './src/'
}

gulp.task('copy-bundle', function() {
    gulp.src([
            './bower_components/angular-material/angular-material.min.css',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            'src/style/font-awesome.min.css'
        ])
        .pipe($.plumber())
        .pipe($.concat('bundle.css'))
        .pipe(gulp.dest(app.devPath + '/static/style'));

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-route/angular-route.min.js',
            // './bower_components/angular-animate/angular-animate.min.js',
            // './bower_components/angular-aria/angular-aria.min.js',
            // './bower_components/angular-material/angular-material.min.js',
            // './bower_components/angular-messages/angular-messages.min.js',
            // // './bower_components/angular-local-storage/dist/angular-local-storage.min.js',
            // './bower_components/angular-bootstrap/ui-bootstrap.min.js',


            // './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            // './bower_components/moment/min/moment.min.js',
            // './bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
            // './bower_components/angular-jquery/dist/angular-jquery.min.js',
            // './bower_components/ng-lodash/build/ng-lodash.min.js',
            // './bower_components/ng-file-upload/ng-file-upload.min.js',
            // './bower_components/textAngular/dist/textAngular-rangy.min.js',
            // './bower_components/textAngular/dist/textAngular-sanitize.min.js',
            // './bower_components/textAngular/dist/textAngular.min.js',
            // './bower_components/ng-table/dist/ng-table.js',
            // './bower_components/ng-tags-input/ng-tags-input.min.js',
            // './bower_components/bootstrap/dist/js/bootstrap.min.js',
        ])
        .pipe($.plumber())
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest(app.devPath + 'static/js'));
});





gulp.task('bundle', function() {
    gulp.src(['./src/script/app.js', './src/script/route.js'])
        .pipe($.plumber())
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest(app.devPath + 'static/js'))
        .pipe($.rename('bundle.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.distPath + 'static/js'))
})

gulp.task('script', function() {
    gulp.src('./src/script/**/*.js')
        .pipe($.plumber())
        .pipe($.concat('all.js'))
        .pipe(gulp.dest(app.devPath + 'static/js'))
        .pipe($.rename('all.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.distPath + 'static/js'))
})




gulp.task('template', function() {
    gulp.src('./src/view/**/*.html')
        .pipe($.plumber())
        .pipe(gulp.dest(app.devPath + 'view'))
        .pipe(gulp.dest(app.distPath + 'view'))
})


gulp.task('data', function() {
    gulp.src('./src/data/*.json')
        .pipe($.plumber())
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.distPath + 'data'))
})


gulp.task('default', function() {
    gulp.run('dist', 'watch');
})

gulp.task('watch', function() {
    gulp.watch('./src/script/**/*.js', ['script']);
    gulp.watch('./src/data/*.json', ['data']);
    gulp.watch('./src/view/**/*.html', ['template']);
})

gulp.task('serve', function() {
    console.log(app.devPath);
    connect.server({
        root: [app.devPath],
        livereload: true,
        port: 8083
    });
    // open("http://localhost:8080");
})

gulp.task('dev', [
    'serve',
    'script',
    'template',
    'data',
    'bundle',
    'copy-bundle',
    'watch'
])

gulp.task('dist', [
    'script',
    'template',
    'data'
])