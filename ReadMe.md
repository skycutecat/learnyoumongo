


# 基本功能學習筆記

MongoDB 為非關連式資料庫. 在此我們會學到基本的架構以及簡單的CRUD

1. 基本架構
2. CRUD

## 基本架構
db : database
collection: 可以想成table name
document: 資料

#### [Collection](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/collections/)
有兩種方式可以新增collection.
##### __insert__ 
insert資料時, 若該collection不存在.則在 insert該資料的同時就會crate collection.
  
##### __createCollection__
使用此方法建立collection就比較特別了. 使用此方法建立的collection 可以在create 的同時給予一些限制.

    strict mode: 可以限制總比數, 總大小, ...etc
    validation : 可以針對特定欄位validate, 若驗證失敗則會根據設定之 
                 _validationLevel_ , _validationAction_ 來回傳
                 警告訊息或者將此次動作給refuse.

## CRUD
#### select  
#### insert
#### update
#### delete

----------
## Reference
[MongoDB Node Toturial](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/)

[MongoDB Node API Doc](http://mongodb.github.io/node-mongodb-native/2.2/api/index.html)



