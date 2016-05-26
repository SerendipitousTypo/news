module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Keyword extends Nodal.Model {}

  Keyword.setDatabase(Nodal.require('db/main.js'));
  Keyword.setSchema(Nodal.my.Schema.models.Keyword);

  return Keyword;

})();
