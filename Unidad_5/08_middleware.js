/*
Un middleware en Express es una función que se ejecuta en el ciclo de solicitud-respuesta de la 
aplicación.

Tiene acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente 
función de middleware en el ciclo de solicitud-respuesta de la aplicación. 

Esta funcion puede realizar las siguientes tareas:

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y el objeto de respuesta.
- Finalizar el ciclo de solicitud-respuesta.
- Llamar a la siguiente función de middleware en la pila.
- Login de solicitudes.
- Validación de datos.
- Cualquier tarea que se necesite realizar antes de que se ejecute la ruta.

*/

const express = require('express');
const app = express();

// Milddleware para logear solicitudes
const logger = (req, req, next) =>{
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
}

app.use(logger);

app.get('/', (req. res) => {
    res.send('Hola mundo');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
}

)