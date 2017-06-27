gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

吞咽是一种工具，用于在开发工作流程中自动执行痛苦或耗时的任务，这样您就可以停止折腾并构建一些东西。

易于使用
通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。

构建快速
利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。

插件高质
Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。

易于学习
通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。


中文网
http://www.gulpjs.com.cn/

gulp英文官网
http://gulpjs.com/


入门指南

1. 全局安装 gulp：

$ npm install --global gulp
2. 作为项目的开发依赖（devDependencies）安装：

$ npm install --save-dev gulp
3. 在项目根目录下创建一个名为 gulpfile.js 的文件：

var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
4. 运行 gulp：

$ gulp

