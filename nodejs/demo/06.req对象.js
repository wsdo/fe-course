const http = require('http');
const server = http.createServer(function(req, res) {
    // HTTP请求头
    console.log(req.headers);
    console.log(req.headers['user-agent']);

    // HTTP版本号

    console.log(req.httpVersion);

    // 请求类型， get post
    console.log(req.method);

    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    if (req.method.toLocaleLowerCase() == 'get') {
        res.end("对不起，你无权查看！2222");
    } else if (req.method.toLocaleLowerCase() == "post") {
        res.end("你可以尽情的查看信息了");
    }

    console.log(req.url);
    res.end('stark');
})

server.listen(3000, "localhost");


console.log("服务器正运行在3000端口");