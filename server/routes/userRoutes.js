const express = require('express');

const userControllers = require('../controllers/userControllers');

const route = express.Router();

route.get('/users', userControllers.getUsers);

route.get('/users/:id', userControllers.getUser);

route.post('/users', userControllers.newUser);

module.exports = route;