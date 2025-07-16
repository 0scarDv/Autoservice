require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const productosRoutes = require('./server/routes/productos.routes');
require('./server/config/mongoose.config');
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

//Importar las rutas 
app.use('/productos', productosRoutes)

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server on port ${3000}`);