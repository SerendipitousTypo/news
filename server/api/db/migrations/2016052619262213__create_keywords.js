module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateKeywords extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052619262213;
    }

    up() {

      return [
        this.createTable("keywords", [{"name":"keyword","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("keywords")
      ];

    }

  }

  return CreateKeywords;

})();
