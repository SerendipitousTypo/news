module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = require('./publisher.js');
  const Channel = require('./channel.js');

  class Article extends Nodal.Model {}

  Article.setDatabase(Nodal.require('db/main.js'));
  Article.setSchema(Nodal.my.Schema.models.Article);

//Join statements for articles table
  Article.joinsTo(Publisher, {multiple: true});
  Article.joinsTo(Channel, {multiple: true});

  return Article;

})();
