let client = require('guidebox');
var fs = require('fs');
//let Guidebox = new client('afa2abc6dd945d98a3c1590deae1d12d571dfbf9', 'US');
let movieArray=[];
//let movie = Guidebox.movies.retrieve(128834);
let movieDbExtended=[];
let llamado=false;
let llamadoDos=false;
let jsonsito;
let dbFinal=[];
function init(req,res,next) {
    /*
 if(!llamado) {
     for (let i = 16; i < 18; i++) {
         let offset= i*100;
         Guidebox.movies.list({sources: 'netflix', limit: 100, offset: offset}).then(function (res) {
             movieArray.push(res);
         }).catch(function (e) {
             console.log(e);
         });

     }
     llamado=true;
 }


    console.log('resultado prueba');
  //  console.log(movieArray[0].results[0]);
    console.log(movieArray.length);

*/





    res.render('index', { title: 'Express' });
}

function getPage(req,res,next) {
    /*
    console.log("tamaño primer array"+movieArray.length);
    let pagina =req.body.pagina;
    let pelicula= req.body.pelicula;
  //  console.log(movieArray[pagina]);
    console.log(movieArray[pagina].results[pelicula].title);
    if(!llamadoDos) {



        for (let i = 0; i < 2; i++) {
            for(let j=0; j<100;j++){
              Guidebox.movies.retrieve(movieArray[i].results[j].id).then(function (res) {
                  movieDbExtended.push(res);
              }).catch(function (e) {
                  console.log(e);
              });

            }

        }
        llamadoDos=true;



    }
    console.log("tamaño segundo array"+movieDbExtended.length);
    console.log(movieDbExtended[pelicula].title);
*/

    res.redirect('/');
}

function savejson(req,res,next) {
    /*
    fs.writeFile('./movies.json', JSON.stringify(movieDbExtended), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!')
    });
*/
    res.end();
}

function comprobarJson(req,res,next) {
    if (!llamado){
    for (let i = 1; i <= 12; i++) {
        if (i < 10) {
            fs.readFile('../DB peliculas JSON/movies_0' + i + '.json', 'utf-8', function (err, data) {
                if (err) throw err;

                jsonsito = JSON.parse(data);
                dbFinal.push(jsonsito);
                console.log("json numero: " + " 0" + i + " " + jsonsito.length);
            });
        } else {
            fs.readFile('../DB peliculas JSON/movies_' + i + '.json', 'utf-8', function (err, data) {
                if (err) throw err;

                jsonsito = JSON.parse(data);
                dbFinal.push(jsonsito);
                console.log("json numero: " + " " + i + " " + jsonsito.length);
            });
        }
    }

    llamado=true;
}

    console.log("tamaño db total:"+ dbFinal.length);

    res.redirect('/');
}



module.exports = {
    init,
    getPage,
    savejson,
    comprobarJson
};