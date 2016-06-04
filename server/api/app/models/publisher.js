module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Article = require('./article.js');

  class Publisher extends Nodal.Model {}

  Publisher.setDatabase(Nodal.require('db/main.js'));
  Publisher.setSchema(Nodal.my.Schema.models.Publisher);

  Publisher.joinedBy(Article, {multiple: true});

  return Publisher;

})();
