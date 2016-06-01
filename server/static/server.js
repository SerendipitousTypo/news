'use strict'

const express = require('express');
const mb = require('./services/master.js')

let chron = new require('chron')();

const app = express();


// require('./config/router.js')(app);
require('./config/middleware.js')(app, express);

chron.add(30, mb);

app.listen('8085');
console.log('static server listening on 8085');

module.exports = app;