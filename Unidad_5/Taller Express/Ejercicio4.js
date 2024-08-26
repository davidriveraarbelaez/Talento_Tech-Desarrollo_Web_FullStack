/*
Imprimir los números del 1 hasta un número definido por el usuario. La ruta debe ser /numeros/:numero y 
debe devolver una lista de números desde 1 hasta el número ingresado.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 4000;          // Establece el puerto 4000

// Lógica


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});