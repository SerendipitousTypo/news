module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class ArtKey extends Nodal.Model {}

  ArtKey.setDatabase(Nodal.require('db/main.js'));
  ArtKey.setSchema(Nodal.my.Schema.models.ArtKey);

  return ArtKey;

})();
