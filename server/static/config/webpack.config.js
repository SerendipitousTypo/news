var path = require('path');
var webpack = require('webpack');
//set nodeModules path
var nodeModules = path.resolve(__dirname, '..','..','..', 'node_modules');
//set buildPath - nothing stored there but still needed.  Webpack requires this. 
var buildPath = path.resolve(__dirname, '..','..','..', 'client', 'build' );
//set mainPath to the primary component.
var mainPath = path.resolve(__dirname, "..","..","..", 'client', 'app','index.js');
var rootPath = path.resolve(__dirname, "..","..","..", 'client', 'app');


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
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
     },
     //adds style loader
     {
      test: /\.css$/,
      loader: 'style!css'
    }
    ]
  },
}
module.exports = config;
