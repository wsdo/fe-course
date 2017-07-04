var http = require('http');

var path = require('path');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" })
    res.end("你访问的页面是" + path.extname(req.url));
})

server.listen(3000, "localhost");
console.log("服务器已经运行");