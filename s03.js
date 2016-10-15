var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    var parrots = db.collection('parrots')
    parrots.find({
        age: {
            $gt: +age
            //解答的 + 代表轉型的意思(字串變數字), 但是如果你輸入 ‘-’ 就真得變成負數了
        }
    }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
    })
})