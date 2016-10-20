
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');
var firstName = process.argv[2];
var lastName = process.argv[3];

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/learnyoumongo";
mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
	assert.equal(null, err);
	//若insert 之 collection不存在,則會自動建立
	//https://docs.mongodb.com/manual/reference/method/db.collection.insert/#create-collection
	//ps. 本來是以為要自己建立一個	collection, 但是實際上已經題目已經有內建一個 collection 'parrots'

	var collection  = db.collection('docs');
	var doc = new Object();
	doc.firstName = firstName;
	doc.lastName = lastName;

	collection.insert(
		doc,
		function (err, data) {
			assert.equal(null, err);
			console.log(JSON.stringify(doc));
			db.close();
	});
});
