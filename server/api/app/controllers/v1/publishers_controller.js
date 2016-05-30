/**
* This is the api controller for the publishers table.
* It manages the creation and maintenance of all publishers  
* all methods are default in v0.0.1
*/
module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Publisher = Nodal.require('app/models/publisher.js');

  class V1PublishersController extends Nodal.Controller {

    index() {

      Publisher.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Publisher.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Publisher.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Publisher.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Publisher.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1PublishersController;

})();
