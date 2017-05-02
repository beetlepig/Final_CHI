let express = require('express');
let router = express.Router();
let controller = require('../Controllers/main');
let otroapi= require('../Controllers/otroapi');

/* GET home page. */
router.get('/',controller.init);

router.get('/otro',otroapi.init);

router.post('/consult',controller.getPage);

router.post('/save',controller.savejson);

router.post('/comprobar',controller.comprobarJson);

module.exports = router;
