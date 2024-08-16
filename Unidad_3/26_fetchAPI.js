/*

Fetch API: Permite hacer peticiones HTTP desde el navegador. Es una interfaz en JavaScript para acceder 
y manipular partes del canal HTTP, como peticiones y respuestas.

Por qué usar Fetch API?
- Soporta promesas. 
- Es más moderna y flexible que XMLHttpRequest.
- Permite enviar y recibir datos en formato JSON.
- Permite enviar y recibir archivos.
- Permite manejar errores de forma más sencilla.

Estructura de una petición Fetch:
fetch(url, opciones)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));   

*/

// Obtener datos de una API
fetch('https://api.github.com/users/octocat')
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    });

//    .catch(error => console.log(error));