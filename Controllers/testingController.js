
const pelis= require('../DB peliculas JSON/DB');
const dbpeliculas= pelis.getDbCompleta();



let usuarioUno={genero: [],director: [],duracion: [],rating: [],ano: []};
let usuarioDos={genero: [],director: [],duracion: [],rating: [],ano: []};


let arraycalUno=[];
let arraycalDos=[];

let listaUno;
let listaDos;

let intercepcion;








function sugerir(req,res,next) {
    arraycalUno=[];
    arraycalDos=[];
    listaUno=[];
    listaDos=[];
    intercepcion=[];

    usuarioUno={genero: [],director: [],duracion: [],rating: [],ano: []};
    usuarioDos={genero: [],director: [],duracion: [],rating: [],ano: []};

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









  listaUno=  lista(usuarioUno,dbpeliculas);

    for (let i in listaUno){
        arraycalUno.push(listaUno[i].calSugerencia);
    }


  listaDos=  lista(usuarioDos, dbpeliculas);



    for (let i in listaDos){
        arraycalDos.push(listaDos[i].calSugerencia);
    }


/*
    for (let i of listaDos){
        if(i.title==="Mandela: Long Walk to Freedom"){
            console.log("Mandela: Long Walk to Freedom: "+ i.calSugerencia);
        }
    }
*/


    intercepcion= interceptar(listaUno,listaDos);
    console.log("numero preselecionados: "+intercepcion.length);

    console.log(cincoFavoritos(intercepcion)[0]);

    res.end();

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
    let usuUno=a;
    let usuDos=b;
    let result = [];
    let insert;
    let calUsuUno;
    let calUsuDos;
    let calFinal;

    for (let i in usuUno){
        if (usuUno[i].id===usuDos[i].id) {
            calUsuUno              = arraycalUno[i];
            calUsuDos              = arraycalDos[i];
            calFinal               = calUsuUno + calUsuDos;
            insert                 = usuUno[i];
            insert.calSugerencia= calUsuUno;
            insert.calSugerenciaUsuDos = calUsuDos;
            insert.calSugerenciaFinal  = calFinal;
            result.push(insert);
        }

    }




    return result;
}




function lista(array, peliculas) {
    let listaSugerencia= peliculas;

    let contador=0;

    let usuario=array;

//AGREGAR VALOR SUGERENCIA A LAS PELICULAS
    for (let i in listaSugerencia){
        if(listaSugerencia[i].hasOwnProperty('calSugerencia')){
             listaSugerencia[i].calSugerencia=0;

        } else {
            listaSugerencia[i]["calSugerencia"]=0;

        }

        if(listaSugerencia[i].hasOwnProperty('calSugerenciaUsuDos')){
            listaSugerencia[i].calSugerenciaUsuDos=0;

        } else {
            listaSugerencia[i]["calSugerenciaUsuDos"]=0;

        }

        if(listaSugerencia[i].hasOwnProperty('calSugerenciaFinal')){
            listaSugerencia[i].calSugerenciaFinal=0;

        } else {
            listaSugerencia[i]["calSugerenciaFinal"]=0;

        }


    }


//FOR PARA ENCONTRAR GENEROS Y ASIGNAR LA CALIFICACION

    for (let j of usuario.genero){

        for (let i in listaSugerencia) {
            try{
                // console.log(j.genres[0].title);
                if(listaSugerencia[i].genres[0].title === j){

                    listaSugerencia[i].calSugerencia+=0.3;
                    contador++;



                } else if (listaSugerencia[i].genres[1].title === j){

                    contador++;
                    listaSugerencia[i].calSugerencia+=0.3;

                } else if (listaSugerencia[i].genres[2].title === j){


                    contador++;
                    listaSugerencia[i].calSugerencia+=0.3;

                } else if (listaSugerencia[i].genres[3].title === j) {


                    listaSugerencia[i].calSugerencia+=0.3;
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
    for (let j of usuario.rating){

        for (let i in listaSugerencia) {
            // console.log(j.genres[0].title);
            if(listaSugerencia[i].rating === j) {

                listaSugerencia[i].calSugerencia += 0.15;
            }
        }
    }


    //FOR PARA ENCONTRAR Año Y ASIGNAR LA CALIFICACION
    for (let j of usuario.ano){

        for (let i in listaSugerencia) {
            if ((listaSugerencia[i].release_year > j[0]) && (listaSugerencia[i].release_year < j[1])) {
                contador++;
                listaSugerencia[i].calSugerencia += 0.2;
            }
        }

    }



    //FOR PARA ENCONTRAR DURACION Y ASIGNAR LA DURACION
    for (let j of usuario.duracion){

        for (let i in listaSugerencia) {
            if ((listaSugerencia[i].duration > j[0]*60) && (listaSugerencia[i].duration < j[1]*60)) {
                contador++;
                listaSugerencia[i].calSugerencia += 0.15;
            }
        }

    }



    //FOR PARA ENCONTRAR DIRECTOR Y ASIGNAR El DIRECTOR
    for (let j of usuario.director){

        for (let i in listaSugerencia) {
            try {
                if (listaSugerencia[i].directors[0].name === j) {
                    contador++;
                    listaSugerencia[i].calSugerencia += 0.2;
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
    for (let i in listaSugerencia) {
        if (listaSugerencia[i].calSugerencia >= 0.4) {
          //  console.log("uno: "+i.title+" id: "+i.id+"-------Califiacion: "+i.calSugerencia);
            listaFinal.push(listaSugerencia[i]);
        }
    }

    let prueba= listaSugerencia;

    prueba.sort(function (a,b) {
        let calA = a.calSugerencia;
        let calB = b.calSugerencia;

        if (calA < calB) {
            return 1;
        }
        if (calA > calB) {
            return -1;
        }
        return 0;
    });

    console.log("favorito: "+prueba[0].calSugerencia +" nombre: "+prueba[0].title);



      listaSugerencia.sort(function (a,b) {
        let calA = a.id;
        let calB = b.id;

        if (calA < calB) {
            return 1;
        }
        if (calA > calB) {
            return -1;
        }
        return 0;
    });


    console.log("contador uno: "+contador);

    return listaSugerencia;

}

//----------------------------------------------------------------------------------------------------------------------



module.exports = {
    sugerir
};