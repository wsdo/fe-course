#### gulp常用插件

- **流控制**
  - [event-stream](http://www.atticuswhite.com/blog/merging-gulpjs-streams/) 事件流，不是插件但很有用 
  - [gulp-if](https://github.com/robrich/gulp-if) 有条件的运行一个task
  - [gulp-clone](https://github.com/mariocasciaro/gulp-clone) Clone files in memory in a gulp stream 非常有用
  - [vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) Use conventional text streams at the start of your gulp or vinyl pipelines 

- **AngularJS**
  - [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) 注明依赖 for angular
  - [gulp-ng-html2js](https://github.com/marklagendijk/gulp-ng-html2js) html2js for angular
  - [gulp-angular-extender](https://libraries.io/npm/gulp-angular-extender) 为angular module添加dependencies
  - [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) 将html模板缓存到$templateCache中

- **文件操作**
  - [gulp-clean](https://github.com/peter-vilja/gulp-clean)  删除文件和目录, 请用[del](https://github.com/sindresorhus/del)来代替它[Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-concat](https://github.com/wearefractal/gulp-concat) 合并文件
  - [gulp-rename](https://github.com/hparra/gulp-rename) 重命名文件
  - [gulp-order](https://github.com/sirlantis/gulp-order) 对src中的文件按照指定顺序进行排序
  - [gulp-filter](https://github.com/sindresorhus/gulp-filter) 过滤文件 非常有用 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/blob/master/2015-11-10/gulpfile.js)
  - [gulp-flatten](https://github.com/armed/gulp-flatten) 当拷贝文件时，不想拷贝目录时使用 [segmentfault](http://segmentfault.com/q/1010000004266922)

- **压缩**
  - [gulp-clean-css](https://github.com/scniro/gulp-clean-css)压缩css
  - [gulp-uglify](https://github.com/terinjokes/gulp-uglify) 用uglify压缩js
  - [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) 压缩图片
  - [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) 压缩html
  - [gulp-csso](https://github.com/ben-eb/gulp-csso) 优化CSS


- **工具**
  - [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) 自动导入gulp plugin
  - [gulp-load-utils](https://www.npmjs.com/package/gulp-load-utils) 增强版gulp-utils
  - [gulp-task-listing](https://github.com/OverZealous/gulp-task-listing) 快速显示gulp task列表
  - [gulp-help](https://github.com/chmontgomery/gulp-help) 为task添加帮助描述
  - [gulp-jsdoc](https://github.com/jsBoot/gulp-jsdoc) 生成JS文档
  - [gulp-plumber](https://github.com/floatdrop/gulp-plumber) Prevent pipe breaking caused by errors from gulp plugins [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [yargs](https://github.com/bcoe/yargs) 处理 process.argv
  - [run-sequence](https://github.com/OverZealous/run-sequence) 顺序执行 gulp task，gulp 4.0 已经支持该功能 `gulp.series(...tasks)`
  - [gulp-notify](https://github.com/mikaelbr/gulp-notify) gulp plugin to send messages based on Vinyl Files
  - [gulp-shell](https://github.com/sun-zheng-an/gulp-shell) 非常有用
  - [gulp-grunt](https://github.com/gratimax/gulp-grunt) 在gulp中运行grunt task

- **JS/CSS自动注入**
  - [gulp-usemin](https://github.com/zont/gulp-usemin) Replaces references to non-optimized scripts or stylesheets into a set of HTML files
  - [gulp-inject](https://github.com/klei/gulp-inject) 在HTML中自动添加style和script标签 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject)
  - [wiredep](https://github.com/taptapship/wiredep) 将bower依赖自动写到index.html中 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject)
  - [gulp-useref](https://github.com/jonkemp/gulp-useref) 功能类似与usemin [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-8-17/bower-dependence-inject) 新版本用法有变化，详见gulp-useref的README.md

- **代码同步**
  - [browser-sync](https://github.com/BrowserSync/browser-sync) 自动同步浏览器，结合gulp.watch方法一起使用 [Example 1](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-babel-test) [Example 2](https://github.com/hjzheng/es6-practice/blob/master/gulpfile.js)
  - [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) server端代码同步

- **Transpilation**
  - [gulp-babel](https://github.com/babel/gulp-babel) 将ES6代码编译成ES5   [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-babel-test)
  - [babelify](https://github.com/babel/babelify)  Browserify transform for Babel
  - [gulp-traceur](https://github.com/sindresorhus/gulp-traceur)  Traceur is a JavaScript.next-to-JavaScript-of-today compiler 

- **打包**
  - [gulp-browserify](https://www.npmjs.com/package/gulp-browserify)  用它和 babelify 实现ES6 module [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-5-30/gulp-es6-module)

- **编译**
  - [gulp-less](https://github.com/plus3network/gulp-less)  处理less [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-7-23/gulp-less-bootstrap)
  - [gulp-sass](https://github.com/dlmanning/gulp-sass) 处理sass

- **代码分析**
  - [gulp-jshint](https://github.com/spalger/gulp-jshint) JSHint检查 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) 检查JS代码风格 [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)

- **特别推荐**
  - [gulp-changed](https://github.com/sindresorhus/gulp-changed) 只传输修改过的文件
  - [gulp-cached](https://github.com/wearefractal/gulp-cached) 将文件先cache起来，先不进行操作
  - [gulp-remember](https://github.com/ahaurw01/gulp-remember) 和gulp-cached一块使用
  - [gulp-newer](https://github.com/tschaub/gulp-newer) pass through newer source files only, supports many:1 source:dest

- **其他**
  - [webpack-stream](https://github.com/shama/webpack-stream) gulp与webpack [Example](https://github.com/hjzheng/angular-es6-practice/blob/master/gulp/scripts.js)
  - [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)  Prefix CSS
  - [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) 生成source map文件
  - [gulp-rev](https://github.com/sindresorhus/gulp-rev) Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css 
  - [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace) [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-11-10)
  - [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) 制作iconfont [Example](https://github.com/hjzheng/CUF_meeting_knowledge_share/tree/master/2015-7-24/gulp-test-iconfont)
  - [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols) 制作SVG Symbols, [关于使用SVG Symbol](http://isux.tencent.com/zh-hans/16292.html)
  - [gulp-template](https://github.com/sindresorhus/gulp-template) 模板替换
  - [gulp-dom-src](https://github.com/cgross/gulp-dom-src) 将html中的script，link等标签中的文件转成gulp stream。
  - [gulp-cheerio](https://github.com/KenPowers/gulp-cheerio) Manipulate HTML and XML files with Cheerio in Gulp. 
  - [require-dir](https://www.npmjs.com/package/require-dir) 利用它我们可以将 gulpfile.js 分成多个文件，具体用法可以参考这个[Splitting a gulpfile into multiple files](http://macr.ae/article/splitting-gulpfile-multiple-files.html)
  - [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) 强烈推荐, 监控你的node应用,并重现启动server