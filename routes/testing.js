let express = require('express');
let router = express.Router();

let genero;
let director;
let duracion=[];
let rating;
let anoWTF=[];



router.get('/',function (req,res,next) {
    res.render('test');
});

router.post('/variables',function (req,res,next) {
    genero= req.body.generoUno;
    director= req.body.directorUno;
    duracion.push((req.body.duracionUno).split("-")[0]);
    duracion.push((req.body.duracionUno).split("-")[1]);
    rating= req.body.ratingUno;
    anoWTF.push((req.body.anoUno).split("-")[0]);
    anoWTF.push((req.body.anoUno).split("-")[1]);
    console.log('genero: '+genero);
    console.log('director: '+director);
    console.log('duracion desde: '+duracion[0]+' hasta: '+duracion[1]);
    console.log('rating: '+rating);
    console.log('año desde: '+anoWTF[0]+' hasta: '+anoWTF[1]);
    res.redirect('/test/');
});



module.exports = router;