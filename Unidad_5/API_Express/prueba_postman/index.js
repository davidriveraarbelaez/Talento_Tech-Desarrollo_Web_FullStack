const express = require('express');

const app = express();
app.set('port', 5000); // Puerto 5000
app.listen(app.get('port')); // Escucha en el puerto 5000
console.log('Servidor corriendo en http://localhost:5000');

app.get('/David', (req, res) => { // Ruta raíz
    res.send('Hola mundo');
});

