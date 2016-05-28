module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateChannels extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052622482351;
    }

    up() {

      return [
        this.createTable("channels", [{"name":"name","type":"string", "properties": {"unique":true}},{"name":"publisher_id","type":"int"},{"name":"last_updated","type":"datetime"},{"name":"url", "type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("channels")
      ];

    }

  }

  return CreateChannels;

})();
