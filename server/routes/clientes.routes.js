const express = require('express');
const router = express.Router();

const { getClientes, postClientes, deleteClientes, putClientes,getClienteById } = require('../controllers/clientes.controller');

// Rutas para productos
router.get('/', getClientes);
router.get('/:id', getClientesById);
router.post('/', post);
router.delete('/:id', deleteClientes);
router.put('/:id', putClientes);
module.exports = router;