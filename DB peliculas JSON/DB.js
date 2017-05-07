let dbFinal=[];
let dbFinalCompleta=[];
let directores=[];
let fs = require('fs');

function unirJSONES() {
    let jsonsito;
    for (let i = 1; i <= 12; i++) {
        if (i < 10) {
            jsonsito = JSON.parse(fs.readFileSync('../DB peliculas JSON/movies_0' + i + '.json', 'utf-8'));
            dbFinal.push(jsonsito);

            console.log("json numero: " + " 0" + i + " " + jsonsito.length);
        } else {
            jsonsito = JSON.parse(fs.readFileSync('../DB peliculas JSON/movies_' + i + '.json', 'utf-8'));
            dbFinal.push(jsonsito);
            console.log("json numero: " + " " + i + " " + jsonsito.length);
        }


    }


     crearUnJSON();
     pushDirectores();
     console.log("numero peliculas totales: "+getDbCompleta().length);

}

function crearUnJSON() {
    for (let i of dbFinal){
        for(let j of i){
            dbFinalCompleta.push(j);
        }
    }

}

function pushDirectores() {
    for(let i of dbFinalCompleta){
        try {
            directores.push(i.directors[0].name);

        } catch (error){
            if (error.name === 'TypeError')
            {

            } else {
                console.log(error);
            }
        }
    }

    console.log("directores con duplicados: "+directores.length);

    directores= uniq(directores);
    directores.sort();
    console.log("filtrados: "+directores.length);


}

function getDirectores() {
    return directores;
}

function uniq(a) {
    return Array.from(new Set(a));
}


function getDB() {
    return dbFinal;
}

function getDbCompleta() {

    return dbFinalCompleta;
}




module.exports = {
    unirJSONES,
    getDB,
    getDbCompleta,
    getDirectores
};
