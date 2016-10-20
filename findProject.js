
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');
var age = Number(process.argv[2]);

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
	assert.equal(null, err);


	//若insert 之 collection不存在,則會自動建立
	//https://docs.mongodb.com/manual/reference/method/db.collection.insert/#create-collection
	//ps. 本來是以為要自己建立一個	collection, 但是實際上已經題目已經有內建一個 collection 'parrots'

	var parrots = db.collection('parrots');

	parrots.find({
		// 查詢條件
		age: {
			$gt: age
		}
	},{
		name: true
		,age: true
		,_id: false
	}).toArray(function (err, items) {
		assert.equal(null, err);
		console.log(items)
	});

	db.close();
});
