
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');
var dbName = process.argv[2];

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/"+dbName;

mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
	assert.equal(null, err);

	var collection  = db.collection(process.argv[3]);collection
	collection.remove({
        _id: process.argv[4]
    },function (err,data) {
        assert.equal(null, err);
        db.close();
    });
});
