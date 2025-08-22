const express = require('express');
const router = express.Router();

const {getProductos, postProductos,deleteProductos} = require('../controllers/productos.controller');

// Rutas para productos
router.get('/', getProductos);
router.post('/', postProductos);
router.delete('/:id', deleteProductos);
module.exports = router;