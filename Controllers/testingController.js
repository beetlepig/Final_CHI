
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



    let intercepcion= interceptar(listaUno,listaDos);
    console.log("numero preselecionados: "+intercepcion.length);

    console.log(cincoFavoritos(intercepcion)[0]);

    res.redirect('/test/');

}


function cincoFavoritos(preselecionados) {
    let preselecion= preselecionados;

    preselecion.sort(function (a,b) {
        let calA = a.calSugerenciaFinal;
        let calB = b.calSugerenciaFinal;

        if (calA < calB) {
            return 1;
        }
        if (calA > calB) {
            return -1;
        }
        return 0;
    });

    let cinco=[];
    for (let i=0; i<5; i++){
        cinco.push(preselecion[i]);
    }

    return cinco;
}



function interceptar(a,b) {
    let result=[];
    for (let i of a){
        for (let j of b){
            if(i.id === j.id){
                let paraAnadir= i;
                let calUno=i.calSugerencia;
                let calDos=j.calSugerencia;


                paraAnadir["calSugerenciaUsuDos"]= calDos;
                paraAnadir["calSugerenciaFinal"]=calUno+calDos;
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
             listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia=0;
        } else {
            listaSugerencia[listaSugerencia.indexOf(i)]["calSugerencia"]=0;
        }

    }


//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION

    for (let j of usuarioUno.genero){

        for (let i of listaSugerencia) {
            try{
                // console.log(j.genres[0].title);
                if(i.genres[0].title === j){

                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;
                    contador++;



                } else if (i.genres[1].title === j){

                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;

                } else if (i.genres[2].title === j){


                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;

                } else if (i.genres[3].title === j) {


                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;
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

                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
            }
        }
    }


    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACION
    for (let j of usuarioUno.ano){

        for (let i of listaSugerencia) {
            if ((i.release_year > j[0]) && (i.release_year < j[1])) {
                contador++;
                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
            }
        }

    }



    //FOR PARA ENCONTRAR DURACION Y ASIGNAR LA DURACION
    for (let j of usuarioUno.duracion){

        for (let i of listaSugerencia) {
            if ((i.duration > j[0]*60) && (i.duration < j[1]*60)) {
                contador++;
                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
            }
        }

    }



    //FOR PARA ENCONTRAR DIRECTOR Y ASIGNAR El DIRECTOR
    for (let j of usuarioUno.director){

        for (let i of listaSugerencia) {
            try {
                if (i.directors[0].name === j) {
                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
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
            listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia=0;
        } else {
            listaSugerencia[listaSugerencia.indexOf(i)]["calSugerencia"]=0;
        }

    }


//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION
    for (let j of usuarioDos.genero){

        for (let i of listaSugerencia) {
            try{
                // console.log(j.genres[0].title);
                if(i.genres[0].title === j){

                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;
                    contador++;



                } else if (i.genres[1].title === j){

                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;

                } else if (i.genres[2].title === j){


                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;

                } else if (i.genres[3].title === j) {


                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia+=0.2;
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
    for (let j of usuarioDos.rating){

        for (let i of listaSugerencia) {
            // console.log(j.genres[0].title);
            if(i.rating === j) {

                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;


            }

        }

    }


    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACION
    for (let j of usuarioDos.ano){

        for (let i of listaSugerencia) {
            if ((i.release_year > j[0]) && (i.release_year < j[1])) {
                contador++;
                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
            }
        }

    }


    //FOR PARA ENCONTRAR DURACION Y ASIGNAR LA DURACION
    for (let j of listaSugerencia) {
        for (let i of usuarioDos.duracion){

            if ((i.duration > j[0]*60) && (i.duration < j[1]*60)) {
                contador++;
                listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
            }

        }

    }

    //FOR PARA ENCONTRAR DIRECTOR Y ASIGNAR El DIRECTOR
    for (let j of usuarioDos.director){
        for (let i of listaSugerencia) {
            try {
                if (i.directors[0].name === j) {
                    contador++;
                    listaSugerencia[listaSugerencia.indexOf(i)].calSugerencia += 0.2;
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