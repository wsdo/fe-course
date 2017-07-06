const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://120.27.245.209:27017/stark";

// 连接数据库
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据连接成功");
    var data = { "name": "stark" };
    db.collection("people").deleteMany(data, function(err, result) {
        if (err) {
            console.log("数据删除失败");
            return;
        }
        console.log("数据删除成功");
        db.close();
        console.log("数据库连接关闭");
    })
})