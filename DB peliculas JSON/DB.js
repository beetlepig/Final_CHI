let dbFinal=[];
let dbFinalCompleta=[];
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
     console.log("numero peliculas totales: "+dbFinalCompleta.length);

}

function crearUnJSON() {
    for (let i of dbFinal){
        for(let j of i){
            dbFinalCompleta.push(j);
        }
    }
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
    getDbCompleta
};
