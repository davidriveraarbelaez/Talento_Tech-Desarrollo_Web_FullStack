const express = require('express'); // Importar Express
const app = express(); // Crear una aplicación de Express
const port = 3000; // Establecer el puerto de escucha del servidor en 3000

// Sistema de operaciones básicas
app.get('/dividir/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    if(b===0){
        return res.status(400).send('No se puede dividir por cero');
    }

    const resultado = a/b;
    res.send(`El resultado es de la división es: ${resultado}`);
})

// Iniciar el servidor, escuchando en el puerto 3000
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})