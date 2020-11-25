require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cart_productRoutes = require('./routes/cart_productRoutes');

const app = express();

// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(cart_productRoutes);

const port = process.env.DB_PORT;

app.listen(port, () =>
    console.log(`Express server is running on localhost:${port}`)
);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));
    
});
