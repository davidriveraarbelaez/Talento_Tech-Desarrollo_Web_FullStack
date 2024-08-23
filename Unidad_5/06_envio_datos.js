const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 3000;          // Establece el puerto 3000

app.get('/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Pedro' },
        { id: 2, nombre: 'Mario' },
        { id: 3, nombre: 'Diana' },
    ];    
    res.json(usuarios); // Envía la respuesta
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});