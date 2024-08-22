/*
Crear una aplicación sencilla de un blog donde se puedan mostrar artículos por su título y 
categoría.
*/

const express = require('express'); // Importar Express
const app = express(); // Crear una aplicación de Express
const port = 3000; // Establecer el puerto de escucha del servidor en 3000

// Ruta para mostrar todos los artículos de una categoría
app.get('/categorias/categoria',(req,res)=>{
    const categoria = req.params.categoria;
    // Buscar todos los artículos de la categoría especificada
    const articulos = ArticulosPorCategoria(categoria);
    res.send(articulos);
})

// Iniciar el servidor, escuchando en el puerto 3000
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})
