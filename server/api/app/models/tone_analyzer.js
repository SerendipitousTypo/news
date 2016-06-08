module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class ToneAnalyzer extends Nodal.Model {}

  ToneAnalyzer.setDatabase(Nodal.require('db/main.js'));
  ToneAnalyzer.setSchema(Nodal.my.Schema.models.ToneAnalyzer);

  return ToneAnalyzer;

})();
