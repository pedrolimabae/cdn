module.exports = {
    check : function(req, res, next){
        if(!Model.validateId(req.params._id)) return res.status(404).json('File Not Found');
        req.idFile = req.params._id;
        if(req.params.ext) req.ext = req.params.ext;
        next();
    },

    getFile : function(req, res, next){
            if(!req.idFile) return next();

            var contentType = getContentType(req.ext);
          

            Model.storage(function(err, gfs){
                if(err||!gfs) return next();
                var options =  {_id: req.idFile}

                gfs.exist(options, function (err, found) {
                      if (err) return next();
                      if(found){
                            res.header('Content-Type', contentType);

                            gfs.createReadStream(options).pipe(res);

                        }else{
                            next()
                        }
                 });
            
               
        
            });    
           
            function getContentType(ext){
                if(!ext) return 'image/jpeg';
                if(ext=='pdf') return 'aplication/pdf';
                if(ext=='png') return 'image/png';
            
            }                                 
    },          



}