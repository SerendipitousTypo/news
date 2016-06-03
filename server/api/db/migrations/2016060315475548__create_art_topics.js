module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateArtTopics extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060315475548;
    }

    up() {

      return [
        this.createTable("art_topics", [{"name":"article_id","type":"int"},{"name":"topic_id","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("art_topics")
      ];

    }

  }

  return CreateArtTopics;

})();
