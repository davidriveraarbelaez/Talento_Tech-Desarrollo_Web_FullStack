/*

*/

const express = require('express'); // Importa express
const bodyParser = require('body-parser');
const app = express();      // Crea una instancia de express
const port = 7000;          // Establece el puerto 3000

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta para crear un nuevo usuario
app.post('/usuarios',(req,res)=>{
    const nuevoUsuario = req.body;
    console.log('Nuevo usuario:', nuevoUsuario);
    res.send('Usuario creado correctamente');
})

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});