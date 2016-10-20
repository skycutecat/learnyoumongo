
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
	assert.equal(null, err);

	var collection  = db.collection('parrots');collection;
	collection.count({
	    age:{$gt: + process.argv[2]}
    },function (err,count) {
        assert.equal(null, err);
        console.log(count);
        db.close();
    });
});
