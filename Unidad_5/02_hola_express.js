const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 3000;          // Establece el puerto 3000

app.get('/', (req, res) => {
    res.send('Hola Express 2.0'); // Envía la respuesta
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});