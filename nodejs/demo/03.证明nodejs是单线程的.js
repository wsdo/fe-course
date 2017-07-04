const http = require('http');

// const hostname = '127.0.0.1';
const hostname = '192.168.30.33';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;

    var a = parseInt(Math.random() * 1000);

    console.log("我收到了一个请求" + a);
    res.setHeader('Content-Type', 'text/stark');
    res.end(a.toString() + 'Hello World stark \n');

    if (a == 555) {
        console.log(req.connection.remoteAddress);
        throw new Error('发生了代码错误');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});