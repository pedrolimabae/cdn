var $model = (function(){
	var mongo = require(ROOT+'/DB/index');


	return {

		ObjectID : mongo.ObjectID,
		validateId : mongo.ObjectID.isValid,
		
		storage : mongo.storage,

		closeDB : mongo.close,


		

		find : function(collection, query, opc, callback, host){
			collection(function(err, docs){
				if(err) return error(callback);
				if(!opc) opc = {};
				docs.findOne(query, opc, function(err, result){
					if(err) return error(callback);
					callback(null, result);
				});

			}, host);

		},
		findAndModify : function(collection, query, opc, callback, host){
			if(!opc) opc=[];
			collection(function(err, doc){
				if(err) return error(callback);
				doc.findAndModify(query, opc, function(err, docs){
					if(err) return error(callback);
					callback(null, docs);
				});				i
			}, host);
		},
		save : function(collection, data, writeConcern, callback, host){
			collection(function(err, docs){
				if(err) return error(callback);
				if(!writeConcern) writeConcern = {};
				docs.insert(data, writeConcern , function(err, result){
					if(err) return error(callback);
					callback(null, result);
				});

			}, host);
        },
        update : function(collection, query, update, callback, opc, host){
		    if(!opc) opc = {};
        	collection(function(err, docs){
				if(err) return error(callback);
        		docs.update(query, update, opc, function(err, result){
					if(err) return error(callback);
        			callback(null, result);
        		});
        	}, host);
        },
        remove : function(collection, query, callback, host){
        	collection(function(err, docs){
				if(err) return error(callback);
        		docs.remove(query, function(err, result){
					if(err) return error(callback);
        			callback(null, result);
        		});

        	}, host);

        },
	}
	function error(callback){
		callback(ErrorDB());
	}
})();
module.exports = $model;
