module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateToneAnalyzers extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060800191636;
    }

    up() {

      return [
        this.createTable("tone_analyzers", [])
      ];

    }

    down() {

      return [
        this.dropTable("tone_analyzers")
      ];

    }

  }

  return CreateToneAnalyzers;

})();
