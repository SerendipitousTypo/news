module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Topic extends Nodal.Model {}

  Topic.setDatabase(Nodal.require('db/main.js'));
  Topic.setSchema(Nodal.my.Schema.models.Topic);

  return Topic;

})();
