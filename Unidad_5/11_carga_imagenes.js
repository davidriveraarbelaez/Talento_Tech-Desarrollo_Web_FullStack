/*
Carga de archivos

Carga de imagenes, instalar el middleware multer
npm install multer

*/

const express = require ('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Conf de multer para almacenar los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ path.extname(file.originalname));
    }
})

const upload = multer({storage: storage});

// Ruta de subida
app.post('/upload', upload.single('image'), (req, res) => {
    if(!req.file){
        return res.status(400).send('Por favor, selecciona una imagen');
    }
    res.send('Imagen subida correctamente');
});

app.listen(port,() => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
