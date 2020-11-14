const express = require('express');

const userControllers = require('../controllers/userControllers');

const route = express.Router();

route.post('/user', userControllers.newUser);

module.exports = route;