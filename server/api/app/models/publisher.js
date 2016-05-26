module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Publisher extends Nodal.Model {}

  Publisher.setDatabase(Nodal.require('db/main.js'));
  Publisher.setSchema(Nodal.my.Schema.models.Publisher);

  return Publisher;

})();
