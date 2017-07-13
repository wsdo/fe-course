怎么把css文件从vue文件里面抽离出来单独写？

    把css文件建立在
        src\assets\css\index.css
        src\assets\css\common.css
        src\assets\css\reset.css

        在app.css 里面负责把其它的css引入
        src\assets\css\app.css
    content:
```
            @import './index.css';
            @import './common.css';   
            @import './reset.css';   
```

    在入口文件引入这个app.css
    src\main.js  //这个就是入口文件

    import '@/assets/css/app.css' //如果不想加这个后缀css的话就去配置

    import '@/assets/css/app'



## 怎么解决不加后缀自动匹配？
    在webpack.base.conf.js 里面找到这个代码

    extensions: ['.js', '.vue', '.json'],

    这个扩展名，如果想让自己的css也识别就在这加上
    extensions: ['.js', '.vue', '.json','.css'],

    更改配置文件之后，要重启vue service



## @是什么意思，很好奇？
    在webpack.base.conf.js 里面找到这个代码
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
            }
        },
    看到alias 这个别名 发现 '@': resolve('src'),突然明白 
    @ 就是代表路径 src
    import '@/assets/css/app' 相当于 import 'src/assets/css/app'