var express = require('express');
var app = express();
// 设置模板引擎，设置为ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index.ejs", {
        "xuesheng": ['小明', "小红", "小爽"]
    })
})

app.listen(3000);