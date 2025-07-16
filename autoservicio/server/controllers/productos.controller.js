const Producto = require('../models/productos.model');
const getProductos = async (req, res) => {
    try {
        console.log('Buscando productos...');
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los productos' });
    }
}

const postProductos = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();

        res.json(nuevoProducto);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear los productos' });
    }
}

module.exports = { getProductos,postProductos };