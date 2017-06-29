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