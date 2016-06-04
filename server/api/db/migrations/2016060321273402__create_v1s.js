module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateV1s extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060321273402;
    }

    up() {

      return [
        this.createTable("v1s", [])
      ];

    }

    down() {

      return [
        this.dropTable("v1s")
      ];

    }

  }

  return CreateV1s;

})();
