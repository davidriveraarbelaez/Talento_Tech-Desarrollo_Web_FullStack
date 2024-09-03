/* 
- Express: Es un framework de NodeJS que nos permite crear aplicaciones web y API Rest
- Body-parser: Es un middleware de Express que nos permite analizar los datos de las peticiones entrantes en diferentes
               formatos. 
- Mongoose: Es una biblioteca de MongoDB para NodeJS, que nos permite interactuar con la base de datos MONGODB. 
*/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/clase_estudiantes',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión'));
db.once('open', () => {
    console.log('Conectado a la base de datos');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
