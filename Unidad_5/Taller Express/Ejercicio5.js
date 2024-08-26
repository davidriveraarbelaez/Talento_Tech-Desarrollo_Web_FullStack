/*
Crear una función que convierta grados Celsius a Fahrenheit. La ruta debe ser /celsius-a-fahrenheit y 
debe recibir el parámetro celsius. Utilizar una arrow function.
*/

const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 5000;          // Establece el puerto 5000

// Lógica
app.get('/celsius-a-fahrenheit/:celsius', (req, res) =>{

})

app.get('/celsius-a-fahrenheit/:celsius', (req, res)=>{

});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});