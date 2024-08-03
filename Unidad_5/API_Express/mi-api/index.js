/*
Crear una API con Express que tenga un endpoint para obtener un saludo
personalizado.
*/

const express = require('express'); // importar express
const app = express(); // crear una instancia de express
const port = 8000; // puerto en el que se ejecutará el servidor

// Ruta para obtener un saludo
app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'mundo';
    res.send('Hola, ${nombre}!'); // Ejercicio: Hacerlo dinámico
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});