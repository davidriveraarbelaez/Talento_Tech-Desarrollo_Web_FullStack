const mongoose = require ('mongoose');

const cursoSchema = new mongoose.Schema({
    Nombre: String,
    Apellido : String,
    CC: Number,
    Promedio: Number,
    Cursos: String
});

module.exports = mongoose.model('Curso', cursoSchema);