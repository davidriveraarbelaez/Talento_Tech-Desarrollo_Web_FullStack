// Importar las dependencias Express, Cors y BodyParser
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); // Crear una instancia de Express
const port = 3000; // Asignar el puerto para la aplicación

app.use(cors()); // Habilitar Cors
app.use(bodyParser.json()); // Habilitar BodyParser
app.use(express.static('public')); // Habilitar la carpeta public

// Ruta de ejemplo para recibir datos desde el frontend
app.post('/api/data', (req,res) =>{    // Ruta post para recibir datos
    const data = req.body; // Obtener datos del body
    console.log('Datos recibidos: ', data); // Imprimir los datos en consola

    res.json({ message: 'Datos recibidos correctamente', receivedData: data });// Enviar una respuesta al frontend
})   

// Iniciar el servidor en el puerto asignado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})