const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dato = require('./models/Dato');

const app = express();

// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error('Error al conectar a MongoDB',error));

// Ruta para guardar datos
app.post('/api/datos', async (req,res) =>{
    const {nombre, valor} = req.body;
    try {
        const nuevoDato = new Dato({
            nombre, 
            valor
        });
        const datoGuardado = await nuevoDato.save();
        res.status(201).json(datoGuardado);
    } catch (error) {
        res.status(400).json({mensaje: 'Error al guardar el dato', error: error.message});
    }
});

// Ruta para obtener todos los datos
app.get('/api/datos', async (req,res) =>{
    const datos = await Dato.find();
    res.json(datos);
});

// CRUD> Create, Read, Update, Delete
// Ruta para actualizar un dato por su id - PUT

// Ruta para eliminar un dato por su id - DELETE


const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})