module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Article = require('./article.js');
  const Topic = require('./topic.js');

  class ArtTopic extends Nodal.Model {}

  ArtTopic.setDatabase(Nodal.require('db/main.js'));
  ArtTopic.setSchema(Nodal.my.Schema.models.ArtTopic);

  // Join statement for ArtTopic to Article foreign key
  ArtTopic.joinsTo(Article, {multiple: true});
  // Join statement for ArtTopic to Topic foreign key
  ArtTopic.joinsTo(Topic, {multiple: true});

  return ArtTopic;

})();
