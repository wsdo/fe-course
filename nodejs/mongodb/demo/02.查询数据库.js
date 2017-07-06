var MongoClient = require('mongodb').MongoClient;

let url = "mongodb://120.27.245.209:27017/stark";
let ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log("数据连接失败");
    }
    console.log("数据库连接成功");

    var cursor = db.collection('people').find({});
    // console.log(cursor);
    cursor.each(function(err, doc) {
        console.log(doc);
        if (doc != null) {
            console.log("数据查询成功");
            console.log(doc.name, doc.age);
            db.close();
        }
    })
})