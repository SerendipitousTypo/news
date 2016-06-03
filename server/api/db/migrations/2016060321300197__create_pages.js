module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreatePages extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060321300197;
    }

    up() {

      return [
        this.createTable("pages", [])
      ];

    }

    down() {

      return [
        this.dropTable("pages")
      ];

    }

  }

  return CreatePages;

})();
