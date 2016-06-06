'use strict'
const express = require('express');
const mb = require('./services/master.js')
const sm = require('./services/snippetManager.js');

let chron = new require('chron')();

const app = express();

// require('./config/router.js')(app);
require('./config/middleware.js')(app, express);

mb();
sm();
chron.add(120, mb);
chron.add(100, sm);

app.listen('8085');
console.log('static server listening on 8085');

module.exports = app;