var path = require('path');
var webpack = require('webpack');
//set nodeModules path
var nodeModules = path.resolve(__dirname, '..','..','..', 'node_modules');
//set buildPath - nothing stored there but still needed.  Webpack requires this. 
var buildPath = path.resolve(__dirname, '..','..','..', 'client', 'build' );
//set mainPath to the primary component.
var mainPath = path.resolve(__dirname, "..","..","..", 'client', 'app', 'index.js');
var rootPath = path.resolve(__dirname, "..","..","..", 'client')


var config = {
  //this line should output issues to the console with line numbers
  devTool: eval,
  entry: [
    'webpack-hot-middleware/client',
     mainPath
  ],
  output: {
    path: buildPath,
    fileName: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
  module: {
    loaders: [
     //adds babel loader for transpiling
     {
      test: /\.js$/,
      loader: 'babel',
      exclude: /nodeModules/,
      inclued: rootPath  //not sure if this is the right path.  this should be all that needs to be compiled. 
     },
     //as style loader
     {
      test: /\.css$/,
      loader: 'style!css'
    }
    ]
  },
  // We have to manually add the Hot Replacement plugin when running
  // from Node
}
module.exports config;
