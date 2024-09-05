document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    const name = document.getElementById('name').value; // Obtiene el valor del input con el id 'name'

    /*
    fetch sirve para enviar peticiones HTTP a un servidor y recibir respuestas.
    */
    const response = await fetch('/api/data',{ // Enviar una petición POST a la ruta 'api/data' con los datos del formulario
        method: 'POST', // Indicar el método de la petición, en nuestro caso POST
        headers: { // Indicar el contenido del cuerpo de la petición, en nuestro caso un objeto JSON con el nombre
            'Content-Type': 'application/json' // indicar que el contenido es de tipo JSON
        },
        body: JSON.stringify({ name })// Convertir el objeto a un string JSON y enviarlo en el cuerpo de la petición
    }); // Esperar la respuesta del servidor
    const result = await response.json(); // Convertir la respuesta a un objeto JSON
    document.getElementById('responseMessage').textContent = result.message; // Mostrar el mensaje de respuesta en el elemento con el id 'responseMessage'
}) // Fin de la función que se ejecuta al enviar el formulario