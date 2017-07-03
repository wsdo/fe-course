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