const express = require('express');
const router = express.Router();

const {getProductos, postProductos} = require('../controllers/productos.controller');

// Rutas para productos
router.get('/', getProductos);
router.post('/', postProductos);
module.exports = router;