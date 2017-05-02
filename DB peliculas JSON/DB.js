/**
 * Created by karlos on 02/05/2017.
 */
let dbFinal=[];
let fs = require('fs');

function unirJSONES() {
    let jsonsito=[];
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
    console.log(dbFinal.length);
}

function getDB() {
    return dbFinal;
}


module.exports = {
    unirJSONES,
    getDB
};
