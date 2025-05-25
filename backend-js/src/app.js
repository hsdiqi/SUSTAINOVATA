const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');
// const errorHandler = require('./middlewares/error.middleware');

app.use(express.json());
app.use(cors());
app.use('/api', routes); 


// app.use(errorHandler); 

module.exports = app;
