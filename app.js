const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routing = require('./routes/router');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(routing);

module.exports = app;