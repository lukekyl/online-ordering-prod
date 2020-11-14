import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pino from 'express-pino-logger'

import userRoutes from './routes/userRoutes'



config.config();

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(userRoutes);
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

export default app;

// const express = require('express');
// const routes = require('./routes/userRoutes');
// const Parser = require('body-parser');
// const app = express();
// app.use(Parser.urlencoded({extended:true}));
// app.use(routes);
// app.listen(process.env.API_PORT);