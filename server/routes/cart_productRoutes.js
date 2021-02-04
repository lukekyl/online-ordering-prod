const express = require('express');

const cart_productControllers = require('../controllers/cart_productControllers');

const route = express.Router();

route.get('/cart_products', cart_productControllers.getCart_products);

route.get('/cart_products/:id', cart_productControllers.getCart_product);

route.post('/cart_products', cart_productControllers.newCart_product);

module.exports = route;