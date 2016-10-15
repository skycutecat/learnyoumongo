
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');
var age = Number(process.argv[2]);

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/learnyoumongo";
// console.log("age:" + age);
mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
	assert.equal(null, err);


	//若insert 之 collection不存在,則會自動建立
	//https://docs.mongodb.com/manual/reference/method/db.collection.insert/#create-collection
	var parrots = db.collection('parrots');
	//console.log(db.collection('parrots').find());
	parrots.find({
		age: { $gt: age }
	}).toArray(function (err, items) {
		assert.equal(null, err);
		console.log(items)
	});
	// 以下為取得 db collections.
	// db.listCollections().toArray(function (err,items){
	// 	console.log(items.length)
	// });
	//close db
	db.close();
});
