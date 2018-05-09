var $mongo = (function(){
    var mongodb = require('mongodb'),
    Grid = require('gridfs-stream'),
    MongoClient = mongodb.MongoClient,
    connStorage;

     function getInstanceStorage(callback){
        if(connStorage) return callback(null, Grid(connStorage, mongodb));

        MongoClient.connect('mongodb://AdminStorageGS:ughrUGHRGrgt__rtjdr$H8734tGUYhhyg86@159.203.90.22:27017/storage',{autoReconnect : true}, function(err, client){
        //MongoClient.connect('mongodb://127.0.0.1:27017',{autoReconnect : true}, function(err, client){

            if(err) return callback(ErrorDB());
            connStorage = client.db('storage');
            callback(null, Grid(connStorage, mongodb));
        });
    }

    return {
            ObjectID : mongodb.ObjectID,
        

            storage : function(callback){
                getInstanceStorage(callback);
            },
            close : function(){
                if(conn) conn.close();
                conn=null;
                if(connStorage) connStorage.close();
                connStorage=null;
            }

    }

})();


module.exports = $mongo;