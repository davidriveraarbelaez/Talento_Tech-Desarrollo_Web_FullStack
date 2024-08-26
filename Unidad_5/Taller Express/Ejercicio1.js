/*
1. Crear una tabla de multiplicar de un número ingresado por el usuario. La ruta debe ser /tabla/:numero y debe devolver la tabla de 
multiplicar del número en formato JSON.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 1000;          // Establece el puerto 1000

// Crear una tabla de multiplicar de un número ingresado por el usuario.
app.get('/tabla/:numero', (req, res) =>{
    const numero = parseInt(req.params.numero);

    // Si no es un número, "El parámetro ingresado no es un número", retornar un error
    /*
    Tips: Condicional If, revisar NaN (Not a Number)
    */

   const tabla = [];
   for (let i=1; i<=10; i++){
    tabla.push({multiplicador:i, resultado: numero * i});
   }

    // JSON
    res.json(tabla);
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});