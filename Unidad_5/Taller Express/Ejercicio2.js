/* 
Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a 
realizar. La ruta debe ser /calculadora y debe recibir los parámetros operando1, operando2 y operacion.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 2000;          // Establece el puerto 2000

// Lógica


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});