/*
Crear un programa que solicite al usuario su nombre y edad, y luego muestre un mensaje de bienvenida 
personalizado. La ruta debe ser /saludo/:nombre/:edad y debe devolver un mensaje de saludo personalizado.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 3000;          // Establece el puerto 3000

// Lógica
app.get('/saludo/:nombre/:edad', (req, res) =>{
    const {nombre, edad} = req.params;

    // Validar que la edad sea un número, condicional If


})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});