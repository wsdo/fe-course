var http = require('http');

var server = http.createServer(function(req, res) {
    // res.statusCode = 266;
    // res.setHeader('Content-Type', 'text/plain');

    res.writeHead(269, { "Content-Type": "text/plain" })

    res.write("<h1>hehe </h1>");
    // res.write("<h1>2333</h1>");
    // res.write("<h1>4444 </h1>");
    res.end('111');
})

server.listen(3000, "localhost");
console.log("服务器已经运行在3000端口");