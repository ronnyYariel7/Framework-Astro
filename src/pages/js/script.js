const main = document.getElementById("principal");
const b1 = document.getElementById("boton"); // main del boton

// Creamos boton para generar tarjeta

let boton = document.createElement("button");
boton.textContent = "Enviar";
boton.type="button";

// agregamos al componente formularios
b1.appendChild(boton);


// creamos la tarjeta de resultados
let tarjeta = document.createElement("div");


// creamos el evento del botón 
boton.onclick = function (){
 // recolectamos los datos
let nombre = document.getElementById("nombre").value;
let telefono = document.getElementById("telefono").value;
let direccion = document.getElementById("direccion").value;
let correo = document.getElementById("email").value;

//agregamos el estilo scc
tarjeta.classList.add("caja");

tarjeta.innerHTML = `Nombre:${nombre}<br>
                    Teléfono:${telefono}<br>
                    Dirección:${direccion}<br>
                    Correo:${correo}<br>`;

    // agregamos al main
    main.appendChild(tarjeta);

}


