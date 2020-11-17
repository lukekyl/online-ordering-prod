const express = require('express');

const userControllers = require('../controllers/userControllers');

const route = express.Router();

route.get('/user', userControllers.getUsers)

route.post('/user', userControllers.newUser);

module.exports = route;