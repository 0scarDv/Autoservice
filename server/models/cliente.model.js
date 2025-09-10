const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    correo: { type: String },
    celular: { type: Number },
}, { timestamps: true });
const Cliente = mongoose.model('Clientes', ClienteSchema);
module.exports = Cliente;