module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const ArtTopic = require('./art_topic.js');

  class Topic extends Nodal.Model {}

  Topic.setDatabase(Nodal.require('db/main.js'));
  Topic.setSchema(Nodal.my.Schema.models.Topic);

  Topic.joinedBy(ArtTopic, {multiple: true});

  return Topic;

})();
