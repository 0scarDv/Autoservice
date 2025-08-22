const Producto = require('../models/productos.model');
const getProductos = async (req, res) => {
    try {
        console.log('Buscando productos...');
        const productos = await Producto.find();
        res.json(productos);
        console.log('Productos encontrados ');
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

const deleteProductos = async (req, res) => {
    try {
        const { id } = req.params;
        const productoAEliminar = await Producto.findByIdAndDelete(id);
        if (!productoEliminado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({ message: `Producto con id ${id} eliminado correctamente` });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el producto' });
    }
}
module.exports = { getProductos, postProductos, deleteProductos };