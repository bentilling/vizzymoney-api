const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const db = require('./config/database');

const app = express();

app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:'));

app.use('/transactions', require('./api/routes/transactions'));

module.exports = app;
