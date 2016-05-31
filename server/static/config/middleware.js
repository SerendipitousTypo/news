/** Middleware module*/
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

module.exports  = (app, express) => {
//set up webpack compiler and middleware
  var complier = webpack(config);
  app.use(webpackDevMiddleware(complier,{publicPath: config.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));

  app.use(express.static(__dirname + '/../../../client'));
}