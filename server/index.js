import config from 'dotenv';

const express = require('express');
const userRoutes = require(`./routes/userRoutes`)
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

config.config();


const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// app.use(userRoutes);
app.listen(process.env.DB_PORT, () =>
    console.log('Express server is running on localhost:3001')
);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});