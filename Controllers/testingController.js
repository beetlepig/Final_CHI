/**
 * Created by karlos on 04/05/2017.
 */
const pelis= require('../DB peliculas JSON/DB');
let genero;
let director;
let duracion=[];
let rating;
let anoWTF=[];

let contador=0;

let listaSugerencia=[];


function sugerir(req,res,next) {
    genero=undefined;
    director= undefined;
    duracion=[];
    rating=undefined;
    anoWTF=[];
    contador=0;
    listaSugerencia= pelis.getDbCompleta();

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
    /*
     for(let i=0; i<pelis.getDB().length; i++){
     let sesion= pelis[i];

     }
     */

    for (let i of  listaSugerencia){
            i["calSugerencia"]=0;
    }

//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION
    for (let i of listaSugerencia) {
        try{
            // console.log(j.genres[0].title);
            if(i.genres[0].title === genero){

                    i.calSugerencia+=0.2;
                    contador++;



            } else if (i.genres[1].title === genero){

                    contador++;
                    i.calSugerencia+=0.2;

            } else if (i.genres[2].title === genero){


                    contador++;
                    i.calSugerencia+=0.2;

            } else if (i.genres[3].title === genero) {


                    i.calSugerencia+=0.2;
                    contador++;

            }


        }catch (error){
            //  console.log(error);
        }
    }

//FOR PARA ENCONTRAR RATING Y ASIGNAR LA CALIFICACION
    for (let i of listaSugerencia) {
        // console.log(j.genres[0].title);
        if(i.rating === rating) {

                i.calSugerencia += 0.2;


        }

    }

    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACIOn
    for (let i of listaSugerencia) {
        if ((i.release_year > anoWTF[0]) && (i.release_year < anoWTF[1])) {
                contador++;
                i.calSugerencia += 0.2;
        }
    }



//un metodo para sacar los favoritos
    console.log("--------------------------FAVORITOS------------------------");
    for (let i of listaSugerencia) {
            if (i.calSugerencia >= 0.6) {
                console.log(i.title+" id: "+i.id+"-------Califiacion: "+i.calSugerencia);
                // console.log(i);
            }
    }



    console.log("contador: "+contador);
    res.redirect('/test/');

}

module.exports = {
    sugerir
};