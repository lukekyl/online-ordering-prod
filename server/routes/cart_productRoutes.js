const express = require('express');

const cart_productControllers = require('../controllers/cart_productControllers');

const route = express.Router();

route.get('/cart_product', cart_productControllers.getCart_products);

route.get('/cart_product/:id', cart_productControllers.getCart_product);

route.post('/cart_product', cart_productControllers.newCart_product);

module.exports = route;