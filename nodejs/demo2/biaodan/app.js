const http = require('http');
const fs = require('fs');
const urlLib = require('url');

const server = http.createServer(function(req, res) {
    var urlobj = urlLib.parse(req.url, true);

    switch (urlobj.pathname) {
        case "/":
            fs.readFile("./static/biaodan.html", function(err, data) {
                if (err) {
                    res.end('404，您访问的页面不存在！');
                    return;
                }

                res.setHeader('Content-Type', 'text/html;charset=UTF-8');

                res.end(data);
            })

            break;
        case "/tijiao":
            var str = "姓名：" + urlobj.query.xingming;
            str += " 快慢：" + urlobj.query.status;
            str += " 留言：" + urlobj.query.message;

            fs.appendFile("./static/调查结果.md", str + "\n", function(err) {
                if (err) {
                    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                    res.end("hi，你的表单提交失败了！！！");
                    return;
                }

                res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                res.end('你得表单已经提交成功！祝你一路顺风！！！');
            })
            break;
        default:
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            res.end("没有有这个页面！！！");

    }


})


server.listen(3000, "192.168.30.33");
console.log("3000端口已经运行！！！");
// 需求：
// 提交的信息写在 / static / 调查结果.md 文件当中
// 姓名： 王树东 快慢： 刚刚好 留言： 再快一点