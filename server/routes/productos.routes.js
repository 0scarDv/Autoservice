const express = require('express');
const router = express.Router();

const { getProductos, postProductos, deleteProductos, putProductos,getProductoById } = require('../controllers/productos.controller');

// Rutas para productos
router.get('/', getProductos);
router.get('/:id', getProductoById);
router.post('/', postProductos);
router.delete('/:id', deleteProductos);
router.put('/:id', putProductos);
module.exports = router;