module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Keyword = Nodal.require('app/models/keyword.js');

  class V1KeywordsController extends Nodal.Controller {

    index() {

      Keyword.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Keyword.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Keyword.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Keyword.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Keyword.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1KeywordsController;

})();
