/**
 * Created by sky_k on 07/05/2017.
 */


let usuarioUno={genero: [],director: [],duracion: [],rating: [],ano: []};
let usuarioDos={genero: [],director: [],duracion: [],rating: [],ano: []};
let form=jQuery('#form');



function agregarParametroUnuarioUno(name) {
let value;
let encontrado=false;
    switch (name){
        case "genero":
            value= $('#generoUno').val();

            if (usuarioUno.genero.length===0){
                usuarioUno.genero.push(value);
                $('#seleccionadosUnoGenero').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioUno.genero) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioUno.genero.push(value);
                    $('#seleccionadosUnoGenero').append("<p>"+value+"</p>");
                }

            }
            break;

        case "director":
            value= $('#directorUno').val();
            encontrado=false;
            if (usuarioUno.director.length===0){
                usuarioUno.director.push(value);
                $('#seleccionadosUnoDirector').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioUno.director) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioUno.director.push(value);
                    $('#seleccionadosUnoDirector').append("<p>"+value+"</p>");
                }

            }
            break;
        case "duracion":

            value= $('#duracionUno').val();
            encontrado=false;
            if (usuarioUno.duracion.length===0){
                usuarioUno.duracion.push(value);
                $('#seleccionadosUnoDuracion').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioUno.duracion) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioUno.duracion.push(value);
                    $('#seleccionadosUnoDuracion').append("<p>"+value+"</p>");
                }

            }

            break;

        case "rating":

            value= $('#ratingUno').val();
            encontrado=false;
            if (usuarioUno.rating.length===0){
                usuarioUno.rating.push(value);
                $('#seleccionadosUnoRating').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioUno.rating) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioUno.rating.push(value);
                    $('#seleccionadosUnoRating').append("<p>"+value+"</p>");
                }

            }

            break;

        case "ano":
            value= $('#anoUno').val();
            encontrado=false;
            if (usuarioUno.ano.length===0){
                usuarioUno.ano.push(value);
                $('#seleccionadosUnoAno').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioUno.ano) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioUno.ano.push(value);
                    $('#seleccionadosUnoAno').append("<p>"+value+"</p>");
                }

            }


            break;
    }

    console.log(usuarioUno);
}

function agregarParametroUnuarioDos(name) {
    let value;
    let encontrado=false;
    switch (name){
        case "genero":
            value= $('#generoDos').val();

            if (usuarioDos.genero.length===0){
                usuarioDos.genero.push(value);
                $('#seleccionadosDosGenero').append("<p>"+value+"</p>")
            } else {
                for (let i of usuarioDos.genero) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioDos.genero.push(value);
                    $('#seleccionadosDosGenero').append("<p>"+value+"</p>");
                }

            }
            break;

        case "director":
            value= $('#directorDos').val();
            encontrado=false;
            if (usuarioDos.director.length===0){
                usuarioDos.director.push(value);
                $('#seleccionadosDosDirector').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioDos.director) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioDos.director.push(value);
                    $('#seleccionadosDosDirector').append("<p>"+value+"</p>");
                }

            }
            break;
        case "duracion":

            value= $('#duracionDos').val();
            encontrado=false;
            if (usuarioDos.duracion.length===0){
                usuarioDos.duracion.push(value);
                $('#seleccionadosDosDuracion').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioDos.duracion) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioDos.duracion.push(value);
                    $('#seleccionadosDosDuracion').append("<p>"+value+"</p>");
                }

            }

            break;

        case "rating":

            value= $('#ratingDos').val();
            encontrado=false;
            if (usuarioDos.rating.length===0){
                usuarioDos.rating.push(value);
                $('#seleccionadosDosRating').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioDos.rating) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioDos.rating.push(value);
                    $('#seleccionadosDosRating').append("<p>"+value+"</p>");
                }

            }

            break;

        case "ano":
            value= $('#anoDos').val();
            encontrado=false;
            if (usuarioDos.ano.length===0){
                usuarioDos.ano.push(value);
                $('#seleccionadosDosAno').append("<p>"+value+"</p>");
            } else {
                for (let i of usuarioDos.ano) {
                    if (value === i) {
                        encontrado=true;
                        break;
                    }

                }
                if (!encontrado){
                    usuarioDos.ano.push(value);
                    $('#seleccionadosDosAno').append("<p>"+value+"</p>");
                }

            }


            break;
    }

    console.log(usuarioDos);
}



form.submit(function (event) {
    event.preventDefault();

    enviarDatos().always(function (data,status) {
        console.log(status);
        if (status === 'success') {
            console.log(data);
            $.each(data, function(index, value) {
                let divi  = $('#recomendados');
                let carti = $('<div>').addClass("card");
                let titulo= $("<h4>"+value.title+"</h4>");
                carti.append(titulo);

                let imagen  = $("<div>", {"style": "background: url("+value.poster_400x570+") no-repeat center / cover"}).addClass("img");
                carti.append(imagen);
                $.each(value.genres, function (indexdos, valuedos) {
                   let  generin= $("<h5>"+valuedos.title+"</h5>");
                   carti.append(generin);
                });
                let descri=  $("<p>"+value.overview+"</p>");
                carti.append(descri);
                divi.append(carti);
            });


        } else if (status === "error") {
            console.log(data.responseJSON);

        }
    });

    enviarDatos();

});

function enviarDatos() {
    let users={usuarioUno: usuarioUno, usuarioDos: usuarioDos};
    var myJsonString = JSON.stringify(users);
    console.log(myJsonString);



    return $.ajax({
                      url: "/test/variables",
                      type: "post",
                      contentType: "application/json",
                      processData: false,
                      data:myJsonString
                 });

}

