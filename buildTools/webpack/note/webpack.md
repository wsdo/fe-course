webpack官网
https://webpack.js.org/

中文网
https://doc.webpack-china.org/concepts/

注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你使用了一个像是 Babel 或 Bublé 的转译器。关于 webpack 支持的多种模块语法，查看模块 API 文档


## 开始使用

mkdir webpack-demo && cd webpack-demo
npm init -y
npm install --save-dev webpack

npm i webpack -D

在window上必须 全局安装 亲测
npm install --global webpack


webpack可以解决以下的问题

使用这种方式去管理 JavaScript 项目会有一些问题：

无法立即体现，脚本的执行依赖于外部扩展库(external library)。
如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。

##　使用webpack命令 cli
webpack 想要打包的路径/文件  打包后的路径/文件
webpack ./src/index.js ./dist/bundle.js

## 使用一个配置文件
    为什么使用一个配置文件
大多数项目会需要很复杂的设置，这就是为什么 webpack 要支持配置文件。这比在终端(terminal)中输入大量命令要高效的多，所以让我们创建一个取代以上使用 CLI 选项方式的配置文件：

使用方式
第一步创建一个 webpack.config.js 

```
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
在命令行里面执行

webpack --config webpack.config.js

也可以执行 

webpack

单独执行webpack就是自己去寻找 webpack.config.js

https://doc.webpack-china.org/api/cli/
在调试的时候可以使用
这个参数帮助显示更多的详细信息
--display-error-details

--display-reasons 显示模块包含在输出中的原因


在命令行中编译 css

需要安装：
npm i style-loader -D
npm install --save-dev css-loader

执行命令：
 webpack ./src/stark.js ./dist/bundle.j
s --module-bind 'css=style-loader!css-loader'

下面这个 --module-bind 后面跟的是需要加载的模块loader
语法是 css=style-loader 使用！隔开 
执行顺序是从右到左
--module-bind 'css=style-loader!css-loader'

列子：
./src/stark.js ./dist/bundle.j
s --module-bind 'css=style-loader!css-loader'

NPM 脚本(NPM Scripts)
考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。在 package.json 添加一个 npm 脚本(npm script)：
```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --config webpack.config.js"
    },
```
执行这个脚本：
  npm run build


在webpack1当中使用相对路径是没问题的
在webpack2中就不可以
```
Invalid configuration object. Webpack has been initialised using a configuration o
bject that does not match the API schema.
 - configuration.output.path: The provided value "./src/stark.js" is not an absolute path!
```

output.filename

```
var path = require('path'); //webpack2必须要求写的
module.exports = {
    entry: {
        stark: './src/stark.js',
        shudong: './src/shudong.js',
    }, //入口文件
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[chunkhash]-[name].js'
        
    }
}

[name] 如果只写这个name值，就表示原文件名字输出
[hash] 把此时打包的hash值都是一样
[chunkhash] 把每个打包的hash值不一样

```
Template	Description
[hash]
模块标识符(module identifier)的 hash
[chunkhash]
chunk 内容的 hash
[name]
模块名称
[id]
模块标识符(module identifier)
[file]
模块文件名称
[filebase]
模块 basename
[query]
模块的 query，例如，文件名 ? 后面的字符串


#插件的使用
https://doc.webpack-china.org/plugins/html-webpack-plugin/