
const pelis= require('../DB peliculas JSON/DB');
let genero;
let director;
let duracion=[];
let rating;
let anoWTF=[];

let usuarioUno={genero: [],director: [],duracion: [],rating: [],ano: []};
let usuarioDos={genero: [],director: [],duracion: [],rating: [],ano: []};

let generoDos;
let directorDos;
let duracionDos=[];
let ratingDos;
let anoWTFDos=[];




function sugerir(req,res,next) {

    usuarioUno.genero=req.body.usuarioUno.genero;
    usuarioUno.director=req.body.usuarioUno.director;
    usuarioUno.duracion=req.body.usuarioUno.duracion;
    usuarioUno.rating=req.body.usuarioUno.rating;
    usuarioUno.ano=req.body.usuarioUno.ano;

    for (let i of usuarioUno.duracion){
        let slip1=i.split("-")[0];
        let slip2=i.split("-")[1];
        let temporal=[];
        temporal.push(slip1);
        temporal.push(slip2);
        usuarioUno.duracion[usuarioUno.duracion.indexOf(i)]=temporal;

    }
    for (let i of usuarioUno.ano){
        let slip1=i.split("-")[0];
        let slip2=i.split("-")[1];
        let temporal=[];
        temporal.push(slip1);
        temporal.push(slip2);
        usuarioUno.ano[usuarioUno.ano.indexOf(i)]=temporal;

    }

    console.log(usuarioUno);

    usuarioDos.genero=req.body.usuarioDos.genero;
    usuarioDos.director=req.body.usuarioDos.director;
    usuarioDos.duracion=req.body.usuarioDos.duracion;
    usuarioDos.rating=req.body.usuarioDos.rating;
    usuarioDos.ano=req.body.usuarioDos.ano;

    for (let i of usuarioDos.duracion){
        let slip1=i.split("-")[0];
        let slip2=i.split("-")[1];
        let temporal=[];
        temporal.push(slip1);
        temporal.push(slip2);
        usuarioDos.duracion[usuarioDos.duracion.indexOf(i)]=temporal;
    }
    for (let i of usuarioDos.ano){
        let slip1=i.split("-")[0];
        let slip2=i.split("-")[1];
        let temporal=[];
        temporal.push(slip1);
        temporal.push(slip2);
        usuarioDos.ano[usuarioDos.ano.indexOf(i)]=temporal;
    }

    console.log(usuarioDos);









  let listaUno=  listaUsuUno();
  let listaDos=  listaUsuDos();
  listaDos.sort();
  listaUno.sort();


    let intercepcion= interceptar(listaUno,listaDos);
    console.log(intercepcion.length);

    res.redirect('/test/');

}



function interceptar(a,b) {
    let result=[];
    for (let i of a){
        for (let j of b){
            if(i.id === j.id){
                let paraAnadir= i;

                paraAnadir["calSugerenciaUsuDos"]= j.calSugerencia;
                paraAnadir["calSugerenciaFinal"]=paraAnadir.calSugerencia+paraAnadir.calSugerenciaUsuDos;
                result.push(paraAnadir);
            }
        }
    }

    return result;
}




function listaUsuUno() {
    let listaSugerencia= pelis.getDbCompleta();

    let contador=0;

//AGREGAR VALOR SUGERENCIA A LAS PELICULAS
    for (let i of  listaSugerencia){
        if(i.hasOwnProperty('calSugerencia')){
            i.calSugerencia=0;
        } else {
            i["calSugerencia"]=0;
        }

    }


//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION

    for (let j of usuarioUno.genero){

        for (let i of listaSugerencia) {
            try{
                // console.log(j.genres[0].title);
                if(i.genres[0].title === j){

                    i.calSugerencia+=0.2;
                    contador++;



                } else if (i.genres[1].title === j){

                    contador++;
                    i.calSugerencia+=0.2;

                } else if (i.genres[2].title === j){


                    contador++;
                    i.calSugerencia+=0.2;

                } else if (i.genres[3].title === j) {


                    i.calSugerencia+=0.2;
                    contador++;

                }


            }catch (error){
                if (error.name === 'TypeError')
                {

                } else {
                    console.log(error);
                }
            }
        }

    }


//FOR PARA ENCONTRAR RATING Y ASIGNAR LA CALIFICACION
    for (let j of usuarioUno.rating){

        for (let i of listaSugerencia) {
            // console.log(j.genres[0].title);
            if(i.rating === j) {

                i.calSugerencia += 0.2;
            }
        }
    }


    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACION
    for (let j of usuarioUno.ano){

        for (let i of listaSugerencia) {
            if ((i.release_year > j[0]) && (i.release_year < j[1])) {
                contador++;
                i.calSugerencia += 0.2;
            }
        }

    }



    //FOR PARA ENCONTRAR DURACION Y ASIGNAR LA DURACION
    for (let j of usuarioUno.duracion){

        for (let i of listaSugerencia) {
            if ((i.duration > j[0]*60) && (i.duration < j[1]*60)) {
                contador++;
                i.calSugerencia += 0.2;
            }
        }

    }



    //FOR PARA ENCONTRAR DIRECTOR Y ASIGNAR El DIRECTOR
    for (let j of usuarioUno.director){

        for (let i of listaSugerencia) {
            try {
                if (i.directors[0].name === j) {
                    contador++;
                    i.calSugerencia += 0.2;
                }
            } catch (error){
                if (error.name === 'TypeError')
                {

                } else {
                    console.log(error);
                }
            }
        }

    }





let listaFinal=[];

//un metodo para sacar los favoritos
    console.log("--------------------------FAVORITOS------------------------");
    for (let i of listaSugerencia) {
        if (i.calSugerencia >= 0.4) {
          //  console.log("uno: "+i.title+" id: "+i.id+"-------Califiacion: "+i.calSugerencia);
            listaFinal.push(i);
        }
    }



    console.log("contador uno: "+contador);
    return listaFinal;

}

//----------------------------------------------------------------------------------------------------------------------
function listaUsuDos() {
    let listaSugerencia= pelis.getDbCompleta();

    let contador=0;

//AGREGAR VALOR SUGERENCIA A LAS PELICULAS
    for (let i of  listaSugerencia){
        if(i.hasOwnProperty('calSugerencia')){
            i.calSugerencia=0;
        } else {
            i["calSugerencia"]=0;
        }

    }


//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION
    for (let i of listaSugerencia) {
        try{
            // console.log(j.genres[0].title);
            if(i.genres[0].title === generoDos){

                i.calSugerencia+=0.2;
                contador++;



            } else if (i.genres[1].title === generoDos){

                contador++;
                i.calSugerencia+=0.2;

            } else if (i.genres[2].title === generoDos){


                contador++;
                i.calSugerencia+=0.2;

            } else if (i.genres[3].title === generoDos) {


                i.calSugerencia+=0.2;
                contador++;

            }


        }catch (error){
            if (error.name === 'TypeError')
            {

            } else {
                console.log(error);
            }
        }
    }

//FOR PARA ENCONTRAR RATING Y ASIGNAR LA CALIFICACION
    for (let i of listaSugerencia) {
        // console.log(j.genres[0].title);
        if(i.rating === ratingDos) {

            i.calSugerencia += 0.2;


        }

    }

    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACIOn
    for (let i of listaSugerencia) {
        if ((i.release_year > anoWTFDos[0]) && (i.release_year < anoWTFDos[1])) {
            contador++;
            i.calSugerencia += 0.2;
        }
    }

    //FOR PARA ENCONTRAR Año Y ASIGNAR LA DURACION
    for (let i of listaSugerencia) {
        if ((i.duration > duracionDos[0]*60) && (i.duration < duracionDos[1]*60)) {
            contador++;
            i.calSugerencia += 0.2;
        }
    }

    //FOR PARA ENCONTRAR DIRECTOR Y ASIGNAR El DIRECTOR
    for (let i of listaSugerencia) {
        try {
            if (i.directors[0].name === directorDos) {
                contador++;
                i.calSugerencia += 0.2;
            }
        } catch (error){
            if (error.name === 'TypeError')
            {

            } else {
                console.log(error);
            }
        }
    }



let listaFinal=[];

//un metodo para sacar los favoritos
    console.log("--------------------------FAVORITOS------------------------");
    for (let i of listaSugerencia) {
        if (i.calSugerencia >= 0.4) {
          //  console.log("dos: "+i.title+" id: "+i.id+"-------Califiacion: "+i.calSugerencia);
            listaFinal.push(i);
        }
    }



    console.log("contador Dos : "+contador);
    return listaFinal;

}

module.exports = {
    sugerir
};