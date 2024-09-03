const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/estudiantes', cursoRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})