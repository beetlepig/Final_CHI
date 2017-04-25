var express = require('express');
var router = express.Router();
var controller = require('../Controllers/main');

/* GET home page. */
router.get('/',controller.init);

module.exports = router;
