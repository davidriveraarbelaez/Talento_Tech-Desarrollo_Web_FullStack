const express = require('express');  // importar express
const bodyParser = require('body-parser'); // importar body-parser
const cors = require('cors'); // importar cors
const fs = require('fs'); // importar fs
const app = express(); // instanciar express
const port = 4000; // puerto de la aplicación

app.use(cors());    // habilitar cors
app.use(bodyParser.json());     // habilitar body-parser
app.use(express.static('public'));  // habilitar la carpeta public

// Ruta para obtener datos desde un archivo JSON
app.get('/api/data', (req, res) => { // ruta get
    fs.readFile('data.json', 'utf8', (err, data) => { // leer el archivo JSON
        if (err) {  // manejar errores
            console.error('Error al leer el archivo JSON:', err);   // imprimir el error en consola
            res.status(500).json({ message: 'Error al leer los datos' });   // enviar respuesta de error al frontend
            return; // terminar la ejecución
        }   // fin del bloque if
        res.json(JSON.parse(data)); // enviar los datos al frontend
    });
});

app.listen(port, () => {    // iniciar servidor
    console.log(`Servidor escuchando en http://localhost:${port}`); // imprimir mensaje en consola
});