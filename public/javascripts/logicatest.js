/**
 * Created by sky_k on 07/05/2017.
 */


let usuarioUno={genero: [],director: [],duracion: [],rating: [],ano: []};
let usuarioDos={genero: [],director: [],duracion: [],rating: [],ano: []};
let form=$('#form');



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
    console.log("enviar");
    event.preventDefault();

    enviarDatos().always(function (data,status) {
        console.log(status);
        if (status === 'success') {
            console.log(data);
            let divi  = $('#recomendados');
            divi.empty();
            $.each(data, function(index, value) {
                let carti = $('<div>').addClass("card");
                let titulo= $("<h4>"+value.title+"</h4>");
                carti.append(titulo);

                let imagen  = $("<div>", {"style": "background: url("+value.poster_400x570+") no-repeat center / cover"}).addClass("img");
                carti.append(imagen);
                let generinDiv= $("<div class='generoDiv'>");
                generinDiv.append($("<h6 class='categoriaH'>"+"Genero(s)"+"</h6>"));
                $.each(value.genres, function (indexdos, valuedos) {
                   let  generin= $("<h5>"+valuedos.title+"</h5>");
                   generinDiv.append(generin);
                });
                carti.append(generinDiv);

                let anoDivin= $("<div class='generoDiv'>");
                anoDivin.append($("<h6 class='categoriaH'>"+"Año"+"</h6>"));
                let ano= $("<h5>"+value.release_year+"</h5>");
                anoDivin.append(ano);
                carti.append(anoDivin);
                let descri=  $("<p >"+value.overview+"</p>").addClass("descripcionPelicula");
                carti.append(descri);
                let descriLink= $("<a id='verMas'>"+"Ver descripción"+"</a>");
                carti.append(descriLink);
                divi.append(carti);



                    $(descriLink).click(()=>{
                        if($(descri).is(":visible")){
                            $(descri).hide(600);
                            $(descriLink).text("Ver descripción")
                        } else {
                            $(descri).show(900);
                            $(descriLink).text("Ocultar descripción")
                        }
                    });

            });


        } else if (status === "error") {
            console.log(data.responseJSON);

        }
    });

});





function enviarDatos() {
    let users={usuarioUno: usuarioUno, usuarioDos: usuarioDos};
    let myJsonString = JSON.stringify(users);
    console.log(myJsonString);



    return $.ajax({
                      url: "/test/variables",
                      type: "post",
                      contentType: "application/json",
                      processData: false,
                      data:myJsonString
                 });

}

