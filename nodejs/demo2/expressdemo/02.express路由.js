var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("这是get请求")
})


app.post('/', function(req, res) {
    res.send("这是post请求")
})


app.get('/photos?', function(req, res) {
    res.send("这是相册")
})

app.get(/^\/banji([\d]{1})\/xuehao([\d]{2})$/, function(req, res) {
    var banji = req.params[0];
    var xuehao = req.params[1];

    res.json({ "banji": banji, "xuehao": xuehao })
})

app.get("/b:banji/x:xuehao", function(req, res) {
    var banji = req.params.banji;
    console.log(banji);
    if (!/^[\d]{1}$/.test(banji)) {
        res.send("班级不合法");
        return;
    }

    var xuehao = req.params.xuehao;

    res.json({ "banji": banji, "xuehao": xuehao });

})
app.listen(3000);