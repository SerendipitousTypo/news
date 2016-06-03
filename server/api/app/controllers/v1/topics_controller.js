module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Topic = Nodal.require('app/models/topic.js');

  class V1TopicsController extends Nodal.Controller {

    index() {

      Topic.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Topic.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Topic.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Topic.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Topic.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1TopicsController;

})();
