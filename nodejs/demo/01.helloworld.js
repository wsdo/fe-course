const http = require('http');

// const hostname = '127.0.0.1';
const hostname = '192.168.30.33';
const port = 3000;

var a = 0;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log("我收到了一个请求");
    a++;
    res.setHeader('Content-Type', 'text/stark');
    res.end(a.toString() + 'Hello World stark \n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});