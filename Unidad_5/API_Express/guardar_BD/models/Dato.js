const mongoose = require ('mongoose');

const DatoSchema = new mongoose.Schema({
    nombre: {
    type: String,
    required: true
    },
    valor: {
    type: Number,
    required: true
    },
    fechaCreacion: {
    type: Date,
    default: Date.now
    }
});

const Dato = mongoose.model('Dato', DatoSchema);
module.exports = Dato;