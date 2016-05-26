module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Keyword = require('./keyword.js');
  const Article = require('./article.js');

  class ArtKey extends Nodal.Model {}

  ArtKey.setDatabase(Nodal.require('db/main.js'));
  ArtKey.setSchema(Nodal.my.Schema.models.ArtKey);

  ArtKey.joinsTo(Keyword, {multiple: true});
  ArtKey.joinsTo(Article, {multiple: true});

  return ArtKey;

})();
