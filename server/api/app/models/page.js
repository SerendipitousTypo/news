module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Page extends Nodal.Model {}

  Page.setDatabase(Nodal.require('db/main.js'));
  Page.setSchema(Nodal.my.Schema.models.Page);

  return Page;

})();
