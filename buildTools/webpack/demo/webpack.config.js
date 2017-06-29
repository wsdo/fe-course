// 按照官网的例子
// var path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist') //当前目录
//     }
// };

// // 把一个文件打包成 一个文件

// var path = require('path'); //webpack2必须要求写的
// module.exports = {
//     entry: './src/stark.js', //入口文件
//     output: {
//         path: path.resolve(__dirname, './dist/'),
//         // path: './src/stark.js', //webpack1当中
//         filename: 'bundle.js'
//     }
// }


// 把多个文件打包成 一个文件

// var path = require('path'); //webpack2必须要求写的
// module.exports = {
//     entry: ['./src/stark.js', './src/stark2.js'], //入口文件
//     output: {
//         path: path.resolve(__dirname, './dist/'),
//         // path: './src/stark.js', //webpack1当中
//         filename: 'bundle.js'
//     }
// }


// 把多个文件打包成 多个文件
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path'); //webpack2必须要求写的
module.exports = {
    entry: {
        app: './src/app.js'
    }, //入口文件
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[chunkhash]-[name].js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }

        ]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index-[hash].html',
            title: 'welcome stark home page',
        }),

    ]
}