let express = require('express');
let router = express.Router();
let controller= require('../Controllers/testingController');







router.get('/',function (req,res,next) {

    res.render('test');
});

router.post('/variables',controller.sugerir);



module.exports = router;