module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateArtKeys extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052619265277;
    }

    up() {

      return [
        this.createTable("art_keys", [{"name":"article_id","type":"int"},{"name":"keyword_id","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("art_keys")
      ];

    }

  }

  return CreateArtKeys;

})();
