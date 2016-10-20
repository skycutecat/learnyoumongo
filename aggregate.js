
//mongo 連線模組
var mongo = require('mongodb').MongoClient;
//警告訊息 模組
var assert = require('assert');

//connection info, database Name: learnyoumongo
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
	//AssertionError: null == error. 若錯誤訊息不是null則跳出訊息
    assert.equal(null, err);

	var collection  = db.collection('prices');collection;
	collection.aggregate([{
	    $match : {
	        size : process.argv[2]
        }
    },{ $group: {
            _id: 'null',
            average:{
                $avg: '$price'
            }
        }}
    ]).toArray(function(err,result){
        assert.equal(null, err);
        console.log(Number(result[0].average).toFixed(2));
        db.close();
    });

});


