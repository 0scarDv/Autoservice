const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String },
    descripcion: { type: String },
    precioPorKilo: { type: Number, required: true },
    unidad: { type: String, enum: ['unidad', 'kilo'], default: 'unidad' },
    stock: { type: Number, required: true },
    activo: { type: Boolean, default: true }
}, { timestamps: true });
const Producto = mongoose.model('Productos', ProductoSchema);
module.exports = Producto;