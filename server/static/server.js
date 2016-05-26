const express = require('express');

app = express();


require('./config/router.js')(app);
require('./config/middleware.js')(app, express);

app.listen('8085');
console.log('static server listening on 8085');

module.exports = app;