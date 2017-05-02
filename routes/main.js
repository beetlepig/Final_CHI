/**
 * Created by karlos on 02/05/2017.
 */
let express = require('express');
let router = express.Router();
let controller = require('../Controllers/index');


router.get('/',controller.renderIndex);



module.exports = router;
