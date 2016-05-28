module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateArticles extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052619255237;
    }

    up() {

      return [
        this.createTable("articles", [{"name":"title","type":"string", "properties": {"unique":true}},{"name":"date","type":"datetime"},{"name":"url","type":"string"},{"name":"content","type":"string"},{"name":"publisher_id","type":"int"},{"name":"channel_id","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("articles")
      ];

    }

  }

  return CreateArticles;

})();
