const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://123.207.172.26:27018/student";

// 123.207.172.26
// 120.27.245.209
let ObjectId = require('mongodb').ObjectID;



exports.insertOne = function(collection, data, callback) {

    // 连接数据库
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("数据库连接失败");
            return;
        }
        console.log("数据连接成功");
        // var data = { "name": "stark", "age": 18, "sex": "男" };
        db.collection(collection).insertOne(data, function(err, result) {
            if (err) {
                console.log("数据插入失败");
                return;
            }
            console.log("数据插入成功");
            callback(err, result);
            db.close();
            console.log("数据库连接关闭");
        })
    })
}


//查询数据

exports.findAll = function(collection, data, sort, callback) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("数据连接失败");

            callback(err, null);
        }
        console.log("数据库连接成功");

        var cursor = db.collection(collection).find(data).sort(sort);
        // console.log(cursor);
        var result = [];
        cursor.each(function(err, doc) {
            console.log(doc);
            if (doc != null) {
                console.log("数据查询成功");
                // console.log(doc.name, doc.age);
                result.push(doc);

                // db.close();
            } else {
                callback(null, result);
                db.close();
            }
        })
    })
}