const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const hostname = '192.168.30.33';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.connection.remoteAddress + "进来了开始计算");
    // var a = parseInt(Math.random() * 1000);
    while (parseInt(Math.random() * 10000) != 5555) {
        // 模拟计算一个任务

        // console.log(1111111111);
    }

    console.log(req.connection.remoteAddress + "此刻出现5555");


    // 下面这个语句是读取文件，注意他是一个异步语句
    fs.readFile("./h6.jpg", function(err, data) {
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);

        console.log(req.connection.remoteAddress + "读取图片完毕");
    })

    // console.log("我收到了一个请求" + a);
    // res.setHeader('Content-Type', 'text/stark');
    // res.end(a.toString() + 'Hello World stark \n');

    // if (a == 555) {
    //     console.log(req.connection.remoteAddress);
    //     throw new Error('发生了代码错误');
    // }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});