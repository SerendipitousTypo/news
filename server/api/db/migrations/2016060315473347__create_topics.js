module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTopics extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060315473347;
    }

    up() {

      return [
        this.createTable("topics", [{"name":"name","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("topics")
      ];

    }

  }

  return CreateTopics;

})();
