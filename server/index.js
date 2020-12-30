require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cart_productRoutes = require('./routes/cart_productRoutes');

const server = express();

// server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(pino);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use(userRoutes);
server.use(productRoutes);
server.use(cartRoutes);
server.use(cart_productRoutes);

const port = process.env.DB_PORT;

server.listen(port, () =>
    console.log(`Express server is running on localhost:${port}`)
);

server.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

// server.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to this API.',
// }));
    
});

module.exports = server;