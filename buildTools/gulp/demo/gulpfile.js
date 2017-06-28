var fs = require('fs');
var gulp = require('gulp');

// 读取gulp里面的所有js文件
fs.readdirSync('./gulp').filter(function(file) {
    return (/\.(js|ts|es)$/i).test(file);
}).map(function(file) {
    // console.log(file);
    require('./gulp/' + file);
})


gulp.task('default', [
    'build',
    // 'connect',
    // 'watch',
    // 'html',
    // 'script',
    // 'css',
    // 'copy-image',
    // 'transformLess',
], function() {
    gulp.start('build');
});


// 一般项目 中

// gulp 默认就是watch 带上 server

// gulp bulid
// gulp test