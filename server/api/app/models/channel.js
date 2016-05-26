module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = require('news/server/api/app/models/publisher.js');

  class Channel extends Nodal.Model {}

  Channel.setDatabase(Nodal.require('db/main.js'));
  Channel.setSchema(Nodal.my.Schema.models.Channel);

  Channel.joinsTo(Publisher, {multiple: true});

  return Channel;

})();
