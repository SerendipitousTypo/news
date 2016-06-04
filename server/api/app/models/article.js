module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = require('./publisher.js');
  const Channel = require('./channel.js');
  const ArtTopic = require('./art_topic.js');

  class Article extends Nodal.Model {}

  Article.setDatabase(Nodal.require('db/main.js'));
  Article.setSchema(Nodal.my.Schema.models.Article);

//Join statements for articles table
  Article.joinsTo(Publisher, {multiple: true});
  Article.joinsTo(Channel, {multiple: true});
  Article.joinedBy(ArtTopic, {multiple: true});

  return Article;

})();
