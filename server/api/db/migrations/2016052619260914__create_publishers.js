module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreatePublishers extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052619260914;
    }

    up() {

      return [
        this.createTable("publishers", [{"name":"name","type":"string", "properties": {"unique":true}},{"name":"region","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("publishers")
      ];

    }

  }

  return CreatePublishers;

})();
