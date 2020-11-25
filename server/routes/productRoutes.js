const express = require('express');

const productControllers = require('../controllers/productControllers');

const route = express.Router();

route.get('/product', productControllers.getProducts);

route.get('/product/:id', productControllers.getProduct);

route.post('/product', productControllers.newProduct);

module.exports = route;