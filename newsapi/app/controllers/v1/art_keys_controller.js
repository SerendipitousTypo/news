module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const ArtKey = Nodal.require('app/models/art_key.js');

  class V1ArtKeysController extends Nodal.Controller {

    index() {

      ArtKey.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      ArtKey.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      ArtKey.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      ArtKey.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      ArtKey.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ArtKeysController;

})();
