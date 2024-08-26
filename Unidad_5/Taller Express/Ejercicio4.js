/*
Imprimir los números del 1 hasta un número definido por el usuario. La ruta debe ser /numeros/:numero y 
debe devolver una lista de números desde 1 hasta el número ingresado.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 4000;          // Establece el puerto 4000

// Lógica
app.get('/numeros:/numero', (req, res) =>{
    const numero = parseInt(req.params.numero);

    // Si no es un número, "El parámetro ingresado no es un número", retornar un error
    /*
    Tips: Condicional If, revisar NaN (Not a Number)
    */

    // Generar la lista de números, FOR, revisar ejercicio 1

    res.json(numeros);
})


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});