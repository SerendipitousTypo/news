module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = require('./publisher.js');

  class Channel extends Nodal.Model {}

  Channel.setDatabase(Nodal.require('db/main.js'));
  Channel.setSchema(Nodal.my.Schema.models.Channel);

// Join statement for channel to publisher foreign key
  Channel.joinsTo(Publisher, {multiple: true});

  return Channel;

})();
