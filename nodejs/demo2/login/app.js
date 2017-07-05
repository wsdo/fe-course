const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');


var users = { 'stark': '123456', 'lishuang': '654321', 'xiaorong': '783821', 'shudong': 'sbsb250250' }
const server = http.createServer(function(req, res) {
    var str = '';

    // res.on('data',function(data){

    // })

    // res.on('end', function() {
    var obj = urlLib.parse(req.url, true);
    const url = obj.pathname;
    const GET = obj.query;
    // const POST = querystring.parse(str);

    if (url == '/user') {
        switch (GET.act) {
            case 'reg':
                if (users[GET.user]) {
                    res.write('{"status":0,"data":"此用户已经存在"}');
                } else {
                    // 把用户存储下来
                    users[GET.user] = GET.pass;

                    // users['jinliang'] = 'wwwwww';
                    res.write('{"status":1,"data":"注册成功"}')
                }
                break;

            case 'login':
                if (users[GET.user] == null) {
                    res.write('{"status":0,"data":"此用户不存在或为空"}');
                } else if (users[GET.user] != GET.pass) {
                    res.write('{"status":0,"data":"用户名或密码有误"}');
                } else {
                    res.write('{"status":1,"data":"登录成功"}');
                }
                break;
            default:
                res.write('{"status":0,"data":"未知的行为"}')

        }

        res.end();
    } else {
        // 读取文件
        var file_name = 'dist' + url;
        fs.readFile(file_name, function(err, data) {
                if (err) {
                    res.write('hi，guys,你访问的页面未找到！404！！！');

                } else {
                    res.write(data);
                }

                res.end();
            })
            // res.writeHead(200, { "Content-Type": "text/plain;charset=UTF-8" })

        // res.write('请访问index.html');
        // res.end();
    }

    // })
})

server.listen(3000);