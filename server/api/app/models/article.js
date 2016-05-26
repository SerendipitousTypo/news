module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = require('./publisher.js');

  class Article extends Nodal.Model {}

  Article.setDatabase(Nodal.require('db/main.js'));
  Article.setSchema(Nodal.my.Schema.models.Article);

  Article.joinsTo(Publisher, {multiple: true});

  return Article;

})();
