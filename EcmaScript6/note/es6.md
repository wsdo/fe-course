## 学习手册
http://es6.ruanyifeng.com/


EcmaScript6 名字简称 ES2015  ES6

使用babel把ES6编译成ES5大部分浏览器可以执行的代码


搭建es6环境
webpack 
babel
watch 
webpack-dev-server

利用webpack开发服务器 
watch 实时监听并重新加载
把这些东西直接复制到你的package.json里面
然后执行 npm i
```
"devDependencies": {
    "babel": "^6.23.0",
    "babel-core": "^6.3.26",
    "babel-loader": "^6.2.0",
    "babel-preset-env": "^1.5.2",
    "babel-preset-es2015": "6.24.1",
    "babel-preset-stage-3": "^6.22.0",
    "webpack": "^2.3.2",
    "webpack-dev-server": "^2.5.0"
  }
```
下面是webpack配置文件

```
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

}
```