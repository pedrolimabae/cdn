var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/images/users/:_id.jpg', Storage.download.check, Storage.download.getFile);

router.get('/files/payments/:_id.:ext', Storage.download.check, Storage.download.getFile);

module.exports = router;
