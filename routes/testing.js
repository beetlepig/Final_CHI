let express = require('express');
let router = express.Router();
let controller= require('../Controllers/testingController');
const db = require('../DB peliculas JSON/DB');









router.get('/',function (req,res,next) {
    res.render('test', {name: db.getDirectores()});
});

router.post('/variables',controller.sugerir);



module.exports = router;