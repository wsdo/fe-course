const express = require('express');
const app = express();
var UserInfo = require("./controller/UserInfoController.js");

app.use(express.static("static"))
    // const router = 

// app.use()

app.get("/add", function(rea, res) {
    res.sendFile(__dirname + "/view/add.html");
})

app.get("/", function(rea, res) {
    res.sendFile(__dirname + "/view/index.html");
})

app.get("/insert", UserInfo.insert);
app.get("/all", UserInfo.all);

app.listen(3000);