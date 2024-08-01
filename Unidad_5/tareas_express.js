const express = require('express'); // Importa express
const app = express();      // Crea una instancia de express
const port = 3000;          // Establece el puerto 3000

app.use(express.json());

// Datos de muestra (Reemplazar con una base de datos)
let tareas = [
    { id: 1, tarea: 'Comprar leche'},
    { id: 2, tarea: 'Hacer ejercicio'}
];

// Rutas
app.get('/tareas', (req, res) => {
    res.json(tareas); // Envía la respuesta
});

app.post('/tareas', (req, res) => {
    const nuevaTarea = {
        id: tareas.length + 1,
        tarea: req.body.tarea
    };
    tareas.push(nuevaTarea);

});


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});