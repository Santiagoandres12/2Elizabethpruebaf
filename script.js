function mostrarInterfaz2() {

    const container = document.querySelector(".container");

    const interfaz2 = document.getElementById("interfaz2");

    // Aplicar transición de desvanecimiento

    container.style.opacity = "0"; // Desvanece la interfaz actual

    setTimeout(() => {

        container.style.display = "none"; // Oculta después de la transición

        interfaz2.style.display = "block"; // Muestra la nueva interfaz

        setTimeout(() => {

            interfaz2.style.opacity = "1"; // Aparece suavemente la nueva interfaz

        }, 50);

    }, 500); // Tiempo de desvanecimiento (en milisegundos)

}

function mostrarInterfaz3() {

    const interfaz2 = document.getElementById("interfaz2");

    const interfaz3 = document.getElementById("interfaz3");

    // Aplicar transición de desvanecimiento

    interfaz2.style.opacity = "0"; // Desvanece la interfaz actual

    setTimeout(() => {

        interfaz2.style.display = "none"; // Oculta después de la transición

        interfaz3.style.display = "block"; // Muestra la nueva interfaz

        setTimeout(() => {

            interfaz3.style.opacity = "1"; // Aparece suavemente la nueva interfaz

        }, 50);

    }, 500); // Tiempo de desvanecimiento (en milisegundos)

}

function enviarRegalo() {

    document.getElementById("mensajeEnviado").style.display = "block";

}

// Función para animar el texto línea por línea

function escribirTextoLineaPorLinea(id, texto, velocidad) {

    const elemento = document.getElementById(id);

    elemento.innerHTML = ""; // Limpia el contenido previo

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            elemento.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribir, velocidad);

        }

    }

    escribir();

}

// Ajustar el formulario para que el texto se muestre con animación

document.getElementById("formulario").addEventListener("submit", function (event) {

    event.preventDefault(); // Evita la redirección del formulario

    const mensaje = "Devido a un pequeño cambio de planes a último momento digamos que el regalo se adelanto un poquito y lo envíe de forma manual, no era mucho y te digo que tengo claro que tú te mereces mucho mas entonces me esforzaré un poco más para la próxima oportunidad que tenga. Ya aparte de todo decirte que no es de la forma que me hubiera gustado ya que tenia otros planes pero bueno igualmente a pesar de todo y que no tengo otra opción quise hacerlo de una manera distinta un poco unica y a mi estilo y espero que te guste el detalle de la pagina que lo hice con mucho cariño y amor para tí. Dudas, quejas o sugerencias en el botón de abajo a la izquierda";

    const elementoID = "mensajeEnviado";

    // Asegúrate de que el mensaje esté visible antes de la animación

    const mensajeElemento = document.getElementById(elementoID);

    mensajeElemento.style.display = "block";

    // Llama a la función para animar el texto

    escribirTextoLineaPorLinea(elementoID, mensaje, 50); // 50 ms entre caracteres

});

function abrirRegalo() {

    // Referencia al GIF inicial

    const gifSinAbrir = document.getElementById("gifSinAbrir");

    // Cambia el GIF al de regalo abierto

    gifSinAbrir.src = "https://i.ibb.co/2Ky0ZYf/ezgif-5-2ec6e13191.gif"; // Sustituye con la URL del GIF abierto

    // Después de 1.5 segundos, pasa a la interfaz 2

    setTimeout(() => {

        reproducirMusicaYMostrarInterfaz2();

    }, 1500);

}

function mostrarInterfaz1() {

    // Ocultar las otras interfaces

    document.getElementById("interfaz2").style.display = "none";

    document.getElementById("interfaz3").style.display = "none";

    // Restablecer las demás configuraciones necesarias

    document.getElementById("mensajeEnviado").style.display = "none"; // Ocultar mensaje

    document.getElementById("formulario").reset(); // Reinicia el formulario si es necesario

    document.querySelector("form button").disabled = false; // Habilita el botón de enviar regalo

    // Cambiar el GIF al estado cerrado

    const gifSinAbrir = document.getElementById("gifSinAbrir");

    gifSinAbrir.src = "https://i.ibb.co/3y6PjT4/ezgif-5-804f50d858.gif"; // Cambia por la URL del GIF cerrado

    // Mostrar la interfaz 1

    const interfaz1 = document.querySelector(".container");

    interfaz1.style.display = "block";

    interfaz1.style.opacity = "1"; // Asegura que sea visible

}

// Detener la música cuando la página está en segundo plano

document.addEventListener("visibilitychange", function () {

    var audio = document.getElementById("background-music");

    if (document.hidden) {

        audio.pause(); // Pausa la música

    } else {

        audio.play(); // Reproduce la música si la página vuelve a estar activa

    }

});

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("contextmenu", event => {

        event.preventDefault(); // Previene el menú contextual

    });

});

function reproducirMusicaYMostrarInterfaz2() {

    const audio = document.getElementById("background-music");

    audio.play(); // Reproducir música

    mostrarInterfaz2();

}

// Función para manejar el envío del regalo

function enviarRegalo() {

    // Deshabilitar el botón para evitar múltiples clics

    const botonEnviar = document.querySelector("#botonEnviar");

    botonEnviar.disabled = true;

    // Mostrar el mensaje de éxito

    document.getElementById("mensajeEnviado").style.display = "block";

    // Llamar a la función para mostrar el texto con animación

    escribirTextoLineaPorLinea("mensajeEnviado", "No es como quisiera, pero sí como puedo.", 50);

    // Restaurar el estado después de 2 segundos (o el tiempo que prefieras)

    setTimeout(() => {

        botonEnviar.disabled = false;  // Habilitar el botón nuevamente

    }, 2000);  // 2 segundos de espera antes de habilitar el botón

}

// Función para manejar el envío del formulario

document.getElementById("formulario").addEventListener("submit", function(event) {

  event.preventDefault(); // Previene la acción por defecto (redirección)

  // Deshabilitar el botón de envío para evitar múltiples clics

  var botonEnviar = document.querySelector("form button");

  botonEnviar.disabled = true; // Deshabilitar el botón

  // Mostrar el mensaje de éxito

  document.getElementById("mensajeEnviado").style.display = "block"; // Muestra el mensaje

  // Aquí se puede agregar el código de éxito para el envío real si lo necesitas.

  // Restaurar el botón después de 2 segundos (o cualquier retraso que prefieras)

  setTimeout(function() {

    botonEnviar.disabled = false; // Habilitar el botón nuevamente

  }, 15000); // 2 segundos de espera antes de que el botón sea habilitado

});

function mostrarInterfaz3() {

    // Desvanecer el mensaje personalizado y su fondo

    const mensaje = document.getElementById('mensajePersonalizado');

    mensaje.classList.add('fade'); // Aplicar clase para desvanecer

    // Después de 2 segundos (duración de la transición), cambiar de interfaz

    setTimeout(function() {

        // Aquí puedes hacer la transición a la interfaz 3

        document.getElementById('interfaz2').style.display = 'none'; // Ocultar interfaz 2

        document.getElementById('interfaz3').style.display = 'block'; // Mostrar interfaz 3

    }, 10000); // Esperar 2 segundos antes de cambiar la interfaz

}

// Función para mostrar la interfaz 3 desde la interfaz 2

function mostrarInterfaz3() {

    // Desvanecer el mensaje personalizado

    const mensaje = document.getElementById('mensajePersonalizado');

    mensaje.classList.add('desvanecer'); // Se desvanece el texto

    // Esperar a que el mensaje desaparezca antes de cambiar la interfaz

    setTimeout(() => {

        // Ocultar la interfaz 2 con animación

        const interfaz2 = document.getElementById('interfaz2');

        interfaz2.classList.remove('mostrar');

        

        setTimeout(() => {

            interfaz2.style.display = 'none';

            

            // Mostrar la interfaz 3 con animación

            const interfaz3 = document.getElementById('interfaz3');

            interfaz3.style.display = 'block';

            

            setTimeout(() => {

                interfaz3.classList.add('mostrar');

            }, 10); // Pequeño retraso para aplicar la transición

        }, 1000); // Espera de 1 segundo para que la interfaz 2 se desvanezca

    }, 10000); // El texto se desvanece y espera antes de cambiar de interfaz

  document.getElementById("mensajePersonalizado").style.overflow = "hidden";

}