const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/clase_estudiantes',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error('Error al conectar a MongoDB',error));


