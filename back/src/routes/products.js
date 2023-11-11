const express = require('express');
const productsSchema = require('../models/products');
const router = express.Router();
const controllers = require('../controllers/controllers')

//producto por name
router.get('/products/:name', controllers.getByNombre);

//producto por id
router.get('/product/:id', controllers.getById);

//Actualizar un producto
router.put('/product/:id', controllers.putById)

//Todos los productos
router.get('/products',controllers.getAllProducts)

//Borrar un producto
router.delete('/product/:id',controllers.DeleteById)

//Añadir producto

router.post('/product/add',controllers.AddProduct)

module.exports = router;