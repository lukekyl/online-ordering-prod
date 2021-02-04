const express = require('express');

const cartControllers = require('../controllers/cartControllers');

const route = express.Router();

route.get('/carts', cartControllers.getCarts);

route.get('/carts/:id', cartControllers.getCart);

route.post('/carts', cartControllers.newCart);

module.exports = route;