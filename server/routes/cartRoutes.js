const express = require('express');

const cartControllers = require('../controllers/cartControllers');

const route = express.Router();

route.get('/cart', cartControllers.getCarts);

route.get('/cart/:id', cartControllers.getCart);

route.post('/cart', cartControllers.newCart);

module.exports = route;