let express = require('express');
let router = express.Router();

let genero;
let director;
let duracion;
let rating;
let anoWTF;



router.get('/',function (req,res,next) {
    res.render('test');
});

router.post('/variables',function (req,res,next) {
    genero= req.body.generoUno;
    director= req.body.directorUno;
    duracion.push((req.body.duracionUno).split("-")[0]);
    duracion.push((req.body.duracionUno).split("-")[1]);
    rating= req.body.ratingUno;
    anoWTF= req.body.anoUno;
    console.log(genero);
    console.log(director);
    console.log(duracion);
    console.log(rating);
    console.log(anoWTF);
    res.redirect('/test/');
});



module.exports = router;