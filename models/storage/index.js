$upload = (function(){
    var multer  = require('multer');
    var storage = multer.diskStorage({
        inMemory: true,
        fileSize: 5 * 1024 * 1024,
    });
return {
      multer : multer({ storage: storage }),

       download : require('./download/index'),


        }

})();

module.exports = $upload;