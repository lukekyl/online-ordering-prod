const express = require('express');

const productControllers = require('../controllers/productControllers');

const route = express.Router();

route.get('/products', productControllers.getProducts);

route.get('/products/:id', productControllers.getProduct);

route.post('/products', productControllers.newProduct);

module.exports = route;