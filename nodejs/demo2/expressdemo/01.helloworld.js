var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world');
});


app.get('/user/:id', function(req, res) {
    res.send('user id is:' + req.params.id);
});


app.get('/student/:banji/:xuehao', function(req, res) {
    res.send("您正在查看的学生资料，班级:" + req.params.banji + 　" 学号：" + req.params.xuehao);
});

app.post('/post', function(req, res) {
    res.send('POST request to homepage');
});
app.listen(3000);