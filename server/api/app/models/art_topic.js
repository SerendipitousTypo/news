module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class ArtTopic extends Nodal.Model {}

  ArtTopic.setDatabase(Nodal.require('db/main.js'));
  ArtTopic.setSchema(Nodal.my.Schema.models.ArtTopic);

  return ArtTopic;

})();
