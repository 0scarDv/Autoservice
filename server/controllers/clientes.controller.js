const Cliente = require('../models/cliente.model');
const getClientes = async (req, res) => {
    try {
        console.log('Buscando clientes...');
        const clientes = await Cliente.find();
        res.json(clientes);
        console.log('Clientes encontrados ');
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los clientes' });
    }
}
const getClienteById = async (req, res) => {
    try {
        console.log('Buscando productos...');
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(producto);
        console.log('Producto encontrado');
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los productos' });
    }
}

const postClientes = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();

        res.json(nuevoProducto);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear los productos' });
    }
}

const deleteClientes = async (req, res) => {
    try {
        const { id } = req.params;
        const productoAEliminar = await Producto.findByIdAndDelete(id);
        if (!productoAEliminar) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({ message: `Producto con id ${id} eliminado correctamente` });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el producto' });
    }
}
const putClientes = async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const productoAActualizar = await Producto.findByIdAndUpdate(id, datosActualizados, { new: true });
        if (!productoAActualizar) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({ message: `Producto con id ${id} actualizado correctamente` });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el producto' });
    }
}
module.exports = { getClientes, getClienteById, postClientes, deleteClientes, putClientes };